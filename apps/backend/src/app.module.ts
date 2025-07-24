import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeaModule } from './idea/idea.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection } from 'mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    IdeaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'),
        onConnectionCreate: (connection: Connection) => {
          connection.on('connected', () => console.log('connected'));
          connection.on('disconnected', () => console.log('disconnected'));
          return connection;
        },
      }),
      inject: [ConfigService],
    })
  ],
})
export class AppModule { }

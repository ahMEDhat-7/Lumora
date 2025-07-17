import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Idea, IdeaSchema } from './entities/idea.entity';
import { IdeaService } from './idea.service';
import { IdeaController } from './idea.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Idea.name, schema: IdeaSchema }])],
  controllers: [IdeaController],
  providers: [IdeaService],
})
export class IdeaModule { }

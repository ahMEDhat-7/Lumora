import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Idea } from './entities/idea.entity';

@Injectable()
export class IdeaService {
  constructor(@InjectModel(Idea.name) private ideaModel: Model<Idea>) { }

  async create(ideaText: string): Promise<Idea> {
    const sections = ['Hero', 'About', 'Contact'];
    const idea = new this.ideaModel({ idea: ideaText, sections });
    return idea.save();
  }

  async findOne(id: string): Promise<Idea | null> {
    return this.ideaModel.findById(id).exec();
  }
  async find(): Promise<Idea[] | null> {
    return this.ideaModel.find().exec();
  }
}

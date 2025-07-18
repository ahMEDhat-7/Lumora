import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { IdeaService } from './idea.service';

@Controller('ideas')
export class IdeaController {
  constructor(private readonly ideaService: IdeaService) { }

  @Post()
  async create(@Body('idea') idea: string) {
    const created = await this.ideaService.create(idea);
    return { id: created._id, idea: created.idea, sections: created.sections };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const idea = await this.ideaService.findOne(id);
    if (!idea) return { message: 'Idea not found' };
    return { idea: idea.idea, sections: idea.sections };
  }
  @Get()
  async find() {
    const idea = await this.ideaService.find();
    return { idea };
  }
}

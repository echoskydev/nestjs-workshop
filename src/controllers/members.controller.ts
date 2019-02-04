import { Controller, Get, Post, Header, Body, Param, Put, Delete } from '@nestjs/common';
import { MembersService } from 'src/services/members.service';
import { Members } from 'src/entities/members.entity';

@Controller('api/v1/members')
export class MembersController {
    constructor(private readonly _service: MembersService) { }

    @Get()
    findAll(): Promise<Members[]> {
        return this._service.findAll();
    }

    @Get('/:uid')
    findOne(@Param('uid') uid: string): Promise<Members> {
        return this._service.findOne(uid);
    }

    @Post()
    @Header('Content-Type', 'application/json')
    async create(@Body() data: Members): Promise<Members> {
        return this._service.create(data);
    }

    @Put('/:uid')
    async update(@Param('uid') uid: string, @Body() data: Members): Promise<Members> {
        return await this._service.update(uid, data);
    }

    @Delete()
    async delete(@Body() data: Members): Promise<Members> {
        return await this._service.delete(`${data.id}`);
    }
}

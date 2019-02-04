import { Controller, Get, Post, Header, Body, Param, Put, Delete } from '@nestjs/common';
import { CustomersService } from 'src/services/customers.service';
import { Customers } from 'src/entities/customers.entity';

@Controller('api/v1/customers')
export class CustomersController {
    constructor(private readonly _service: CustomersService) { }

    @Get()
    findAll(): Promise<Customers[]> {
        return this._service.findAll();
    }

    @Get('/:uid')
    findOne(@Param('uid') uid: string): Promise<Customers> {
        return this._service.findOne(uid);
    }

    @Post()
    @Header('Content-Type', 'application/json')
    async create(@Body() data: Customers): Promise<Customers> {
        return this._service.create(data);
    }

    @Put('/:uid')
    async update(@Param('uid') uid: string, @Body() data: Customers): Promise<Customers> {
        return await this._service.update(uid, data);
    }

    @Delete()
    async delete(@Body() data: Customers): Promise<Customers> {
        return await this._service.delete(`${data.id}`);
    }
}

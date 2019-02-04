import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomersRepository } from 'src/repositories/customers.repository';
import { Customers } from 'src/entities/customers.entity';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customers)
        private readonly _repository: CustomersRepository,
    ) { }

    async findAll(): Promise<Customers[]> {
        return await this._repository.find();
    }

    async findOne(uid: string): Promise<Customers> {
        return await this._repository.findOne(uid);
    }

    async create(data: Customers): Promise<Customers> {
        await this._repository.save(data);
        return data;
    }

    async update(uid: string, data: Customers): Promise<Customers> {
        try {
            await this._repository.update(uid, data);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async delete(uid: string): Promise<Customers> {
        try {
            const deleted = this._repository.findOne(uid);
            await this._repository.delete(uid);
            return deleted;
        } catch (e) {
            console.log(e);
        }
    }
}

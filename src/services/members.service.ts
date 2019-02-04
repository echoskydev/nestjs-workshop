import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MembersRepository } from 'src/repositories/members.repository';
import { Members } from 'src/entities/members.entity';

@Injectable()
export class MembersService {
    constructor(
        @InjectRepository(Members)
        private readonly _repository: MembersRepository,
    ) { }

    async findAll(): Promise<Members[]> {
        return await this._repository.find();
    }

    async findOne(uid: string): Promise<Members> {
        return await this._repository.findOne(uid);
    }

    async create(data: Members): Promise<Members> {
        await this._repository.save(data);
        return data;
    }

    async update(uid: string, data: Members): Promise<Members> {
        try {
            await this._repository.update(uid, data);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async delete(uid: string): Promise<Members> {
        try {
            const deleted = this._repository.findOne(uid);
            await this._repository.delete(uid);
            return deleted;
        } catch (e) {
            console.log(e);
        }
    }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersService } from 'src/services/members.service';
import { Members } from 'src/entities/members.entity';
import { MembersController } from 'src/controllers/members.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Members])],
    controllers: [MembersController],
    providers: [MembersService],
})
export class MembersModule { }

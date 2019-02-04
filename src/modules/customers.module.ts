import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from 'src/services/customers.service';
import { Customers } from 'src/entities/customers.entity';
import { CustomersController } from 'src/controllers/customers.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Customers])],
    controllers: [CustomersController],
    providers: [CustomersService],
})
export class CustomersModule { }

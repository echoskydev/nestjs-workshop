import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersModule } from './modules/members.module';
import { CustomersModule } from './modules/customers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MembersModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

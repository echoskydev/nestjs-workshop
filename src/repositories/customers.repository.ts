import { EntityRepository, Repository } from 'typeorm';
import { Customers } from 'src/entities/customers.entity';

@EntityRepository(Customers)
export class CustomersRepository extends Repository<Customers> { }

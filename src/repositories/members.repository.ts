import { EntityRepository, Repository } from 'typeorm';
import { Members } from 'src/entities/members.entity';

@EntityRepository(Members)
export class MembersRepository extends Repository<Members> { }

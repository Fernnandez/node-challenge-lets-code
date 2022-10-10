import { DataSource } from 'typeorm';
import { Produto } from '../entities/produto';

export const typeorm = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev',
  password: 'dev_pass',
  database: 'lets-code',
  entities: [Produto],
  migrations: ['./migrations/*.ts'],
  migrationsTableName: 'migrations',
  logging: false,
  synchronize: true,
});

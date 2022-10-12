import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Pedido } from './Pedido';

enum Cargo {
  Vendedor,
  Gerente
}

@Entity('funcionario')
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column({type: "enum", enum: Cargo})
  cargo: Cargo;

  @ManyToOne(type => Funcionario, (funcionario: Funcionario) => funcionario.liderados)
  gerente: Funcionario;

  @OneToMany(type => Funcionario, (funcionario: Funcionario) => funcionario.gerente)
  liderados: Funcionario[];

  @OneToMany(type => Pedido, (pedido: Pedido) => pedido.vendedor)
  pedidos: Pedido[];
}

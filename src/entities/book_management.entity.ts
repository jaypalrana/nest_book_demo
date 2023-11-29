import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class BookManagement {
  @PrimaryGeneratedColumn()
  bookId: number;

  @Column({ type: "character varying"})
  title: string

  @Column({ type: "character varying"})
  isbn: string;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    select: true,
  })
  public createdAt!: Date;

  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    select: true,
  })
  
  public updatedAt!: Date;

  @DeleteDateColumn({
    type: "timestamptz",
    nullable: true, // Set the column to allow NULL values
    select: true,
  })
  deletedAt: Date;

}
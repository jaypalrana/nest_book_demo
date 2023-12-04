import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class BookManagement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "character varying" })
  title: string;

  @Column({ type: "character varying" })
  isbn: string;

  @Column({ type: "smallint" })
  is_deleted: number;

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
}

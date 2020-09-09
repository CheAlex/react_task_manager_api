import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({default: true})
  isCompleted: boolean;

  constructor(title: string, isCompleted: boolean) {
    this.title = title;
    this.isCompleted = isCompleted;
  }

  toggleComplete = () => {
    this.isCompleted = !this.isCompleted;
  }
}

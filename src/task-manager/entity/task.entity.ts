import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isCompleted: boolean;

  constructor(title: string, isCompleted: boolean) {
    this.title = title;
    this.isCompleted = isCompleted;
  }

  markComplete = () => {
    this.isCompleted = true;
  };

  unmarkComplete = () => {
    this.isCompleted = false;
  }
}

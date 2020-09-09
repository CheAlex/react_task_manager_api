import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./entity/task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TaskManagerService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find({
      order: {
        id: "ASC"
      }
    });
  }

  async toggleComplete(id: number)  {
    let task = await this.taskRepository.findOneOrFail(id);

    task.toggleComplete();

    await this.taskRepository.save(task);
  }

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task(
      createTaskDto.title,
      createTaskDto.isCompleted
    );

    return this.taskRepository.save(task);
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}

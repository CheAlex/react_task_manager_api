import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post
} from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskManagerService } from "./task-manager.service";
import {Task} from "./entity/task.entity";

@Controller("tasks")
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskManagerService.findAll();
  }

  @Get("toggle-completed/:id")
  toggleComplete(@Param("id") id: number) {
    return this.taskManagerService.toggleComplete(id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskManagerService.create(createTaskDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.taskManagerService.remove(id);
  }
}

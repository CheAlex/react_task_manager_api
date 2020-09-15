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
  findAllAction(): Promise<Task[]> {
    return this.taskManagerService.findAll();
  }

  @Get("mark-complete/:id")
  markCompleteAction(@Param("id") id: number) {
    return this.taskManagerService.markComplete(id);
  }

  @Get("unmark-complete/:id")
  unmarkCompleteAction(@Param("id") id: number) {
    return this.taskManagerService.unmarkComplete(id);
  }

  @Post()
  createAction(@Body() createTaskDto: CreateTaskDto) {
    return this.taskManagerService.create(createTaskDto);
  }

  @Delete(":id")
  removeAction(@Param("id") id: number): Promise<void> {
    return this.taskManagerService.remove(id);
  }
}

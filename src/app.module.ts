import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TaskManagerModule } from "./task-manager/task-manager.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "db",
      "port": 5432,
      "username": "postgres",
      "password": "root",
      "database": "postgres",
      "synchronize": true,
      "logging": false,
      "autoLoadEntities": true,
      // "entity": [
      //     "src/**/entity/*.ts"
      // ],
      "migrations": [
          "src/migration/**/*.ts"
      ],
      "subscribers": [
          "src/subscriber/**/*.ts"
      ]
    }),
    TaskManagerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

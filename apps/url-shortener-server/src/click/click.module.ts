import { Module } from "@nestjs/common";
import { ClickModuleBase } from "./base/click.module.base";
import { ClickService } from "./click.service";
import { ClickController } from "./click.controller";
import { ClickResolver } from "./click.resolver";

@Module({
  imports: [ClickModuleBase],
  controllers: [ClickController],
  providers: [ClickService, ClickResolver],
  exports: [ClickService],
})
export class ClickModule {}

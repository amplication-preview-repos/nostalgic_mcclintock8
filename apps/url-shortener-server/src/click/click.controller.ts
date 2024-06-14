import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClickService } from "./click.service";
import { ClickControllerBase } from "./base/click.controller.base";

@swagger.ApiTags("clicks")
@common.Controller("clicks")
export class ClickController extends ClickControllerBase {
  constructor(protected readonly service: ClickService) {
    super(service);
  }
}

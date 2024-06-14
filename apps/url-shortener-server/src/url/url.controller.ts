import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UrlService } from "./url.service";
import { UrlControllerBase } from "./base/url.controller.base";

@swagger.ApiTags("urls")
@common.Controller("urls")
export class UrlController extends UrlControllerBase {
  constructor(protected readonly service: UrlService) {
    super(service);
  }
}

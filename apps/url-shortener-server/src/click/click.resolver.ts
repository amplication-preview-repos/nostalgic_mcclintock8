import * as graphql from "@nestjs/graphql";
import { ClickResolverBase } from "./base/click.resolver.base";
import { Click } from "./base/Click";
import { ClickService } from "./click.service";

@graphql.Resolver(() => Click)
export class ClickResolver extends ClickResolverBase {
  constructor(protected readonly service: ClickService) {
    super(service);
  }
}

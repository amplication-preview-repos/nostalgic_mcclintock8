import * as graphql from "@nestjs/graphql";
import { UrlResolverBase } from "./base/url.resolver.base";
import { Url } from "./base/Url";
import { UrlService } from "./url.service";

@graphql.Resolver(() => Url)
export class UrlResolver extends UrlResolverBase {
  constructor(protected readonly service: UrlService) {
    super(service);
  }
}

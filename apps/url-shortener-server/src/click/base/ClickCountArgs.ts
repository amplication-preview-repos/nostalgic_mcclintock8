/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClickWhereInput } from "./ClickWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ClickCountArgs {
  @ApiProperty({
    required: false,
    type: () => ClickWhereInput,
  })
  @Field(() => ClickWhereInput, { nullable: true })
  @Type(() => ClickWhereInput)
  where?: ClickWhereInput;
}

export { ClickCountArgs as ClickCountArgs };

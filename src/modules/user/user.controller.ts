import { Controller, Post, Body, Response, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Post()
    async CreateUser(@Response() res, @Body() user: CreateUserDto){
        const response = await this.userService.createUser(user)
       res.status(HttpStatus.OK).json(response);
    }

}
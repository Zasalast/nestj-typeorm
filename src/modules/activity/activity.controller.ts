import { Controller, Post, Body, Response, HttpStatus } from "@nestjs/common";
import { ActivityService } from "./activity.service";
import { CreateActivityDto } from "./dto/create-activity.dto";

@Controller('activity')
export class ActivityController{
    constructor(private readonly activityService: ActivityService){}

    @Post()
    async CreateActivity(@Response() res, @Body() activity: CreateActivityDto){
        const response = await this.activityService.createUser(activity)
       res.status(HttpStatus.OK).json(response);
    }

}
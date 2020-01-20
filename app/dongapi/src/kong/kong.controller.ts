import { Controller, Post, Body } from '@nestjs/common';
import { KongService, Kong } from './kong.service';

@Controller('kong')
export class KongController {

    constructor(
        private readonly kongService: KongService
    ) {}

    @Post()
    getKong(@Body() body: object): Promise<Kong> {
        return this.kongService.assignKong(body);
    }
}

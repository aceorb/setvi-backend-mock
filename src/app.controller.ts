import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { QueryCategoryDto } from './query-category.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('webapi/GetSasToken')
  getSasToken() {
    return this.appService.getFileContent('sastoken.json');
  }

  @Post('webapi/getfavoriteresources')
  getFavoriteResources() {
    return this.appService.getFileContent('favorite.json');
  }

  @Post('webapi/getwhatsnewresources')
  getWhatsNewResources() {
    return this.appService.getFileContent('whatsnew.json');
  }

  @Post('webapi/GetPresentations')
  getPresentation() {
    return this.appService.getFileContent('presentations.json');
  }

  @Post('webapi/GetCategoriesAndResources')
  getCategoriesAndResources(@Body() body: QueryCategoryDto) {
    if (body.categoryid === 16) {
      return this.appService.getFileContent('categoriesandresources-16.json');
    }
    return this.appService.getFileContent('categoriesandresources.json');
  }
}

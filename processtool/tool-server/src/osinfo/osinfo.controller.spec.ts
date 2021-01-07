import { Test, TestingModule } from '@nestjs/testing';
import { OSInfoController } from './osinfo.controller';
import { OSInfoService } from './osinfo.service';

describe('OSInfoController', () => {
  let osinfoController: OSInfoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OSInfoController],
      providers: [OSInfoService],
    }).compile();

    osinfoController = app.get<OSInfoController>(OSInfoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(osinfoController.getHello()).toBe('Hello World!');
    });
  });
});

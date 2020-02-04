import { Test, TestingModule } from '@nestjs/testing';
import { KongController } from './kong.controller';

describe('Kong Controller', () => {
  let controller: KongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KongController],
    }).compile();

    controller = module.get<KongController>(KongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

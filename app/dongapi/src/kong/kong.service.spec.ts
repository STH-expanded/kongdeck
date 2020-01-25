import { Test, TestingModule } from '@nestjs/testing';
import { KongService } from './kong.service';

describe('KongService', () => {
  let service: KongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KongService],
    }).compile();

    service = module.get<KongService>(KongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

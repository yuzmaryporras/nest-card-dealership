import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CAR_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
    
  ){}

  populateDB(){
    this.carsService.fillCarWithSeedData(CAR_SEED);
    this.brandsService.fillBransWithSeedData(BRAND_SEED);
    return 'SEED executed';
  }
}

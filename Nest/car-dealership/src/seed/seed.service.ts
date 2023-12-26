import { Injectable } from '@nestjs/common';
import {CarsService} from "../cars/cars.service";
import {CARS_SEED} from "./data/cars.seed";
import {BrandsService} from "../brands/brands.service";
import {BRANDS_SEED} from "./data/brand.seed";

@Injectable()
export class SeedService {

  constructor(
      private readonly carsService: CarsService,
      private readonly brandService: BrandsService
  ) {
  }

  populateDB(){

    this.carsService.fillCarsWitkSeedData(CARS_SEED);
    this.brandService.fillBrandsWitkSeedData(BRANDS_SEED)

    return 'SEED executed';
  }
}

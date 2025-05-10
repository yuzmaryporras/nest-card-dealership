import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { car } from './interfaces/car.interface';
@Injectable()
export class CarsService {

    private cars: car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cheroke'
        }
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id: string ){
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id '${ id }' not found`);
        return car;
    }
}

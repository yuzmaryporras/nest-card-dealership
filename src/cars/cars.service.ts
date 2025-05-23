import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto';
@Injectable()
export class CarsService {

    private cars: Car[] = [];

    findAll(){
        return this.cars;
    }

    findOneById(id: string ){
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id '${ id }' not found`);
        return car;
    }

    create(car: CreateCarDto){
        const newCar: Car = {
            id: uuid(),
            ...car
        }
        this.cars.push(newCar);
        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto){
        let carBD = this.findOneById(id);

        this.cars = this.cars.map( car => {
            if( car.id === id){
                carBD = { ...carBD, ...updateCarDto, id };
                return carBD;
            }
            return car;
        })
        return carBD;
    }

    delete(id: string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter( car => car.id !== id );
    }

    fillCarWithSeedData(cars: Car[]){
        this.cars = cars;
    }
}

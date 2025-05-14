import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
    {
        id: uuid(),
        name: "Volvo",
        creationDate: new Date().getTime()
    },
    {
        id: uuid(),
        name: "Toyota",
        creationDate: new Date().getTime()
    },
    {
        id: uuid(),
        name: "Honda",
        creationDate: new Date().getTime()
    },
    {
        id: uuid(),
        name: "Jeep",
        creationDate: new Date().getTime()
    },
    {
        id: uuid(),
        name: "Tesla",
        creationDate: new Date().getTime()
    }
]
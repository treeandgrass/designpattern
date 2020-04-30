import { BBrandCar } from "./BBrandCar";
import { AbstractFactory } from "./AbstractFactory";
import { ICar } from "./Car";

export class BBrandFactory  implements AbstractFactory {
    factory(): ICar {
        return new BBrandCar();
    }
}
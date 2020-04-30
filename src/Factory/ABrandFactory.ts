import { ABrandCar } from "./ABrandCar";
import { AbstractFactory } from "./AbstractFactory";
import { ICar } from "./Car";

export class ABrandFactory  implements AbstractFactory {
    factory(): ICar {
        return new ABrandCar();
    }
}
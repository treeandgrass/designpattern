import { ICar } from "./Car";
import { AbstractFactory } from "./AbstractFactory"
import { BBrandFactory } from "./BBrandFactory";
import { ABrandFactory } from "./ABrandFactory";

export class Client {
    constructor() {
        let bBrandFactory: AbstractFactory = new BBrandFactory();
        let aBrandFactory: AbstractFactory = new ABrandFactory();

        let aCar: ICar = aBrandFactory.factory();
        let bCar: ICar = bBrandFactory.factory();

        aCar.paly();
        bCar.paly();

        aCar.stop();
        bCar.stop();
    }
}
import { ICar } from "./Car";

export class BBrandCar implements ICar {
    paly(): void {
        console.log("BBrandCar is runing");
    }

    stop(): void {
        console.log("BBrandCar is stoped");
    }
}
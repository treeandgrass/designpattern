import { ICar } from "./Car";

export class ABrandCar implements ICar {
    paly(): void {
        console.log("ABrandCar is running");
    }
    stop(): void {
        console.log("ABrandCar is stoped");
    }
}
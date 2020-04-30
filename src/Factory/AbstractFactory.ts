import { ICar } from "./Car";

export interface AbstractFactory {
    factory(): ICar;
}
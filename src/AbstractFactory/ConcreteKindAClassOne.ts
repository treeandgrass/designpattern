import { IAbstractKindAClass } from "./AbstractKindAClass"

export class ConcreteKindAClassOne implements IAbstractKindAClass {
    public use(): void {
        console.log("ConcreteKindAClassOne action");
    }
}
import { IAbstractKindAClass } from "./AbstractKindAClass"

export class ConcreteKindAClassTwo implements IAbstractKindAClass {
    public use(): void {
        console.log("ConcreteKindAClassTwo action");
    }
}
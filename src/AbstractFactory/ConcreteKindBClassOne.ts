import { IAbstractKindBClass } from "./AbstractKindBClass"

export class ConcreteKindBClassOne implements IAbstractKindBClass {
    public use(): void {
        console.log("ConcreteKindBClassOne action");
    }
}
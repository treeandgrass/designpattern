import { IAbstractKindBClass } from "./AbstractKindBClass"

export class ConcreteKindBClassTwo implements IAbstractKindBClass {
    public use(): void {
        console.log("ConcreteKindBClassTwo action");
    }
}
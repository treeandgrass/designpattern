import { IAbstractKindAClass } from "./AbstractKindAClass"
import { IAbstractKindBClass } from "./AbstractKindBClass"
import { IAbstractFactory } from "./AbstractFactory";
import { ConcreteKindAClassTwo } from "./ConcreteKindAClassTwo";
import { ConcreteKindBClassTwo } from "./ConcreteKindBClassTwo";

export class ConcreteFactoryTwo implements IAbstractFactory {
    public buildA(): IAbstractKindAClass {
        return new ConcreteKindAClassTwo();
    }
    public buildB(): IAbstractKindBClass {
        return new ConcreteKindBClassTwo();
    }

}
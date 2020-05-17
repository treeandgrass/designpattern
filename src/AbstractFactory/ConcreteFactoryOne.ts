import { IAbstractKindAClass } from "./AbstractKindAClass"
import { IAbstractKindBClass } from "./AbstractKindBClass"
import { IAbstractFactory } from "./AbstractFactory";
import { ConcreteKindAClassOne } from "./ConcreteKindAClassOne";
import { ConcreteKindBClassOne } from "./ConcreteKindBClassOne";

export class ConcreteFactoryOne implements IAbstractFactory {
    public buildA(): IAbstractKindAClass {
        return new ConcreteKindAClassOne();
    }
    public buildB(): IAbstractKindBClass {
        return new ConcreteKindBClassOne();
    }

}
import { IAbstractKindBClass } from "./AbstractKindBClass"
import { IAbstractKindAClass } from "./AbstractKindAClass"
import { IAbstractFactory } from "./AbstractFactory";
import { ConcreteFactoryOne } from "./ConcreteFactoryOne"
import { ConcreteFactoryTwo } from "./ConcreteFactoryTwo"

export class Client {
    public run(): void {
        let one: IAbstractFactory = new ConcreteFactoryOne();
        let two: IAbstractFactory = new ConcreteFactoryTwo();

        let kindAOne: IAbstractKindAClass = one.buildA();
        let kindATwo: IAbstractKindBClass = one.buildB();

        let kindBOne: IAbstractKindAClass = two.buildA();
        let kindBTwo: IAbstractKindBClass = two.buildB();

        kindAOne.use();
        kindATwo.use();

        kindBOne.use();
        kindBTwo.use();
    }
}
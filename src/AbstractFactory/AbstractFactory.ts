import { IAbstractKindAClass } from "./AbstractKindAClass"
import { IAbstractKindBClass } from "./AbstractKindBClass"
export interface IAbstractFactory {
    buildA(): IAbstractKindAClass
    buildB(): IAbstractKindBClass,
}
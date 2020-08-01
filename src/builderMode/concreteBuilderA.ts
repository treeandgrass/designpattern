import { Builder } from './builder'

export class ConcreteBuilderA implements Builder {
  buildPartA(): void {
    throw new Error("Method not implemented.");
  }
  buildPartB(): void {
    throw new Error("Method not implemented.");
  }
}
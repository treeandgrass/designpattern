import { ITV } from "./TV";
import { TVFactory } from "./TVFactory";


describe("SimpleFactory", () => {
    const factory: TVFactory = new TVFactory();

    test("haier tv", () => {
        // create haier tv
        const haierTV: ITV = factory.build("HAIER");
        haierTV.play();
        haierTV.close();
    });

    test("huipu tv", () => {
        // create huipu tv
        const huipuTV: ITV = factory.build("HUIPU");
        huipuTV.play();
        huipuTV.close();
    });
})
import { Client } from "./Client";

describe("test abstract factory", () => {
    const client: Client = new Client();
    
    test("run", () => {
        client.run();
    });
})
import { ITV } from "./TV";

export class HuiPuTV implements ITV {
    close(): void {
        console.log("HuiPuTV is close");
    }

    play(): void {
       console.log("HuiPuTV is play");
    }

}
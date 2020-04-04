import { ITV } from "./TV";

export class HaierTV implements ITV {
    close(): void {
        console.log("HaierTV close");
    }
    play(): void {
        console.log("HaierTV play");
    }

}



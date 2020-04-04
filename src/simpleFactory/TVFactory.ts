import { ITV } from "./TV";
import { HaierTV } from "./HaierTV";
import { HuiPuTV } from "./HuipuTV";

export class TVFactory {
    public build(type: string): ITV {
        if (type === "HAIER") {
            return new  HaierTV();
        } else  if (type === "HUIPU") {
            return new HuiPuTV();
        }
    }
}
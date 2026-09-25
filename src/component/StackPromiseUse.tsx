import { use } from "react";
import type { StackType } from "../stackType";
import AllStack from "./StackMain";

interface stacksprops{
    stackPromise: Promise<StackType[]>
}
 
export default function StackPromise({stackPromise}:stacksprops){
    const allStack = use(stackPromise);
    

    return(
        <div>
            <AllStack allStack={allStack}></AllStack>
        </div>
    )
}
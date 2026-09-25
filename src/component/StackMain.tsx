import { useState } from "react";
import type { StackType } from "../stackType";
import SelectedStack from "./StackMainList";
import CartStack from "./CartStack";


interface AllStackProps {
    allStack: StackType[];
}
export default function AllStack({ allStack }: AllStackProps) {

    const [stackSelect, setStackSelect] = useState<StackType[]>([]);
    const handleRemoveStack = (cartStack: StackType) => {
        const restStack = stackSelect.filter(el => el.id != cartStack.id)
        setStackSelect(restStack)
    }
    return (
        <div className="lg:flex gap-2 justify-between container w-full mx-auto">
            <div className="md:grid grid-cols-3 gap-2">
                {
                    allStack.map((stack: StackType) => {

                        return (
                            <SelectedStack stack={stack} key={stack.id} stackSelect={stackSelect} setStackSelect={setStackSelect} />
                        );
                    })

                }
            </div>
            <div>
                <div className="card mx-auto lg:w-[240px] xl:w-[300px] border-gray-200 border-1">
                    <div className="card-body">
                        <h2 className="card-title">Your Stack</h2>
                        <p className="text-gray-400">{stackSelect.length} Technology selected</p>

                        {stackSelect.map((cartStack: StackType) => {
                            return (
                                <ul>
                                    <li>
                                        <CartStack cartStack={cartStack} handleRemoveStack={handleRemoveStack} key={cartStack.id}></CartStack>

                                    </li>
                                </ul>
                            )
                        })}
                        <div className={`card-actions justify-center ${stackSelect.length==0?"hidden":"block"}`}>
                            <button onClick={() => {
                                return (
                                    setStackSelect([])
                                )
                            }

                            } className="btn w-full text-red-400">Remove All</button>
                        </div>
                        <div className={ `border-1 border-gray-200 p-5 text-center text-gray-400 ${stackSelect.length>0?"hidden":"block"}`}>
                            <p>Your stack is empty</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*    */
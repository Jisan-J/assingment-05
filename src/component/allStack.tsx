import { useState } from "react";
import type { StackType } from "../stackType";
import SelectedStack from "./SelectedStack";
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
        <div className="lg:flex justify-between container w-full mx-auto">
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
                <div className="card mx-auto lg:w-[280px] xl:w-[370px] border-2">
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
                        <div className="card-actions justify-center">
                            <button onClick={() => {
                                return (
                                    setStackSelect([])
                                )
                            }

                            } className="btn w-full">Remove All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*    */
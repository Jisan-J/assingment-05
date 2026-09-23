import type { StackType } from "../stackType";
import SelectedStack from "./SelectedStack";
interface AllStackProps {
    allStack: StackType[];
}
export default function AllStack({ allStack }:AllStackProps) {
    
    return (
        <div className="lg:flex justify-between container w-full mx-auto">
            <div className="md:grid grid-cols-3 gap-2">
                {
                    allStack.map((stack:StackType) => {
                        
                        return(
                     <SelectedStack stack={stack} key={stack.id}/>
                        );
                    })

                }
            </div>    
            <div>
                <div className="card mx-auto lg:w-[280px] xl:w-[370px] border-2">
                    <div className="card-body">
                        <h2 className="card-title">Your Stack</h2>
                        <p className="text-gray-400">Technology selected</p>
                        <div className="card-actions justify-center">
                            <button className="btn w-full">Remove All</button>
                        </div>
                    </div>
                </div>
            </div>
</div>
            );
}

/*   */
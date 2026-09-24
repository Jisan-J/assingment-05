
import type { Dispatch, SetStateAction } from "react";
import type { StackType } from "../stackType";

interface SelectedStackProps {
    stack: StackType;
    setStackSelect: Dispatch<SetStateAction<StackType[]>>;
    stackSelect: StackType[];
   
}

const SelectedStack = ({ stack, stackSelect, setStackSelect }: SelectedStackProps) => {
    const isSelected = stackSelect.some((selectedStack) => selectedStack.id === stack.id);

    return (

        <div className={`card card-border ${isSelected ? "bg-gray-100" : "bg-base-100"}`}>
            <div className="card-body gap-4">
                <div className="flex justify-between">
                    <div className="flex gap-2 md:flex-col md:items-baseline">
                        <img className="h-6 md:h-8" src={stack.icon} alt="" />
                        <h2 className="card-title">{stack.name}</h2>
                    </div>
                    <div>
                        {stack.badge}
                    </div>
                </div>

                <p className="xl:text-[18px]">{stack.description}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => setStackSelect([...stackSelect, stack])}
                        disabled={isSelected}
                        className="btn btn-neutral w-full rounded-xl"
                    >
                        {isSelected ? "Selected" : "Buy"}
                    </button>
                   
                </div>
            </div>
        </div>



    );
};

export default SelectedStack;
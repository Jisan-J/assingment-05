
import type { Dispatch, SetStateAction } from "react";
import type { StackType } from "../stackType";
import { FaStar } from "react-icons/fa";

interface SelectedStackProps {
    stack: StackType;
    setStackSelect: Dispatch<SetStateAction<StackType[]>>;
    stackSelect: StackType[];

}

const SelectedStack = ({ stack, stackSelect, setStackSelect }: SelectedStackProps) => {
    const isSelected = stackSelect.some((selectedStack) => selectedStack.id === stack.id);

    return (

        <div className={`card card-border ${isSelected ? "bg-gray-100" : "bg-base-100"}`}>
            <div className="card-body gap-5">
                <div className="flex justify-between">
                    <div className="flex gap-2 md:flex-col md:items-baseline">
                        <img className="h-6 md:h-8" src={stack.icon} alt="" />
                        <h2 className="card-title">{stack.name}</h2>
                    </div>
                    <div >
                        <span className="bg-blue-100 rounded-xl text-sky-600 py-1 px-4">{stack.badge}</span>
                    </div>
                </div>

                <p className="text-[12px] xl:text-[14px]">{stack.description}</p>
                <div className="flex items-center gap-2">
                    <p className="bg-gray-100 text-[12px] xl:text-[16px] bg-contain py-1 rounded-md text-center">{stack.category}</p>
                    <p className="text-[12px]  xl:text-[16px]">{stack.difficulty}</p>
                    <div className="flex items-center gap-2">
                       <span className="text-yellow-300"><FaStar /></span> 
                        <p className="text-[12px] xl:text-[16px]">{stack.rating}</p></div>
                </div>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => setStackSelect([...stackSelect, stack])}
                        disabled={isSelected}
                        className="btn btn-neutral w-full rounded-xl"
                    >
                        {isSelected ? "Selected" : "Add to Stack"}
                    </button>

                </div>
            </div>
        </div>



    );
};

export default SelectedStack;
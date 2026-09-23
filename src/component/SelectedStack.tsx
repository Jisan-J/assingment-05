
import { useState } from "react";
import type { StackType } from "../stackType";

interface SelectedStackProps {
    stack: StackType;
}

const SelectedStack = ({ stack }: SelectedStackProps) => {

    const [isSelected, setSelected]= useState(false);

    return (
        
        <div className={`card card-border  ${isSelected===true?"bg-gray-300": "bg-base-100"}`}>
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
                    <button  disabled={isSelected==true} onClick={() => setSelected(true)} className="btn btn-neutral w-full rounded-xl">{isSelected===true?"Selected":"Buy"}</button>
                </div>
            </div>
        </div>
        

    );
};

export default SelectedStack;
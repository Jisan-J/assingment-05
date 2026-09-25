import type { StackType } from "../stackType";
import { RxCross2 } from "react-icons/rx";

interface CartStackProps {
    cartStack: StackType;
    handleRemoveStack: (cartStack: StackType) => void;
}

const CartStack = ({ cartStack, handleRemoveStack }: CartStackProps) => {

   
    return (

        <div className="flex justify-between items-center p-2 border-1 rounded-md border-gray-200  h-14">
            <div className="flex gap-2 p-2"><img className="h-4 md:h-6" src={cartStack.icon} alt="" />
                <h2 className="card-title text-[12px]">{cartStack.name}</h2>
            </div>
            <span onClick={() => handleRemoveStack(cartStack)} className="text-xl text-gray-400 p-2 cursor-pointer"> <RxCross2 /></span>

        </div>




        /*  <div className="flex gap-2 md:flex-col md:items-baseline">
                         <img className="h-6 md:h-8" src={stackSelect.name} alt="" />
                         <h2 className="card-title">{stackSelect.name}</h2>
                     </div> */
    )
};

export default CartStack;
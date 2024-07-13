import { FC } from "react";
import ListItem from "./ListItem"
import { MdOutlineRadioButtonUnchecked} from "react-icons/md";
import { PiWarningOctagonDuotone } from "react-icons/pi";

interface props {
    Todos: Array<object>;
    
    addTargetItem(Item: Object): void;
    
    removeSelf(id: number): void;

}

// let defaultprops: props = {
//     Todos: [
//         {task: "item2", deadline: "2024-07-16", priority: "orange", note: "", id: 0.7137666134585867},
//         {task: "item3", deadline: "2024-07-19", priority: "orange", note: "", id: 0.3074480789565295}],
//     addTargetItem: () => {},
//     removeSelf: () => {}
// }
const OverdueList: FC<props> = (props) => {
    return(
        <div className={`${props.Todos.length === 0 ? 'hidden' : ''} space-y-7 px-4 pb-9 border-red-700 border-2 priority-red rounded-lg py-5`}>
            <div className={`flex text-rose-600 gap-2`}>
                <PiWarningOctagonDuotone size={20}/>
                <p>Please complete them as soon as posible</p>
            </div>
            {props.Todos.map((Item: any) => { 
                return <ListItem removeSelf={props.removeSelf}
                addTargetItem={props.addTargetItem} 
                key={Item.id}
                parent="Overdue"
                Item={Item}   
                checkBoxIcon={<MdOutlineRadioButtonUnchecked size='30'/>}/> })}   
        </div>
        
    )}

export default OverdueList
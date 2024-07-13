import { FC } from "react";
import ListItem from "./ListItem"
import { MdOutlineRadioButtonChecked} from "react-icons/md";


interface props {
    Todos: Array<object>;
    
    addTargetItem(Item: Object): void;
    
    removeSelf(id: number): void;

}

const CheckedList: FC<props> = (props) => {
    

    return(
        <div className={'space-y-7 px-4 pb-9'}>
            {props.Todos.map((Item: any) => { 
                return <ListItem removeSelf={props.removeSelf}
                addTargetItem={props.addTargetItem} 
                key={Item.id}
                parent="Checked"
                Item={Item}   
                checkBoxIcon={<MdOutlineRadioButtonChecked size='30'/>}
                style={'line-through opacity-30'}/> })}   
        </div>
        
    )}

export default CheckedList;
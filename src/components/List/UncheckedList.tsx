import { FC } from "react";
import ListItem from "./ListItem"
import { MdOutlineRadioButtonUnchecked} from "react-icons/md";


interface props {
    Todos: Array<object>;
    
    addTargetItem(Item: Object): void;
    
    removeSelf(id: number): void;

}
const UncheckedList: FC<props> = (props) => {
    

    return(
        <div className={'space-y-7 px-4 pb-9'}>
           

            {props.Todos.map((Item: any) => { 
                return <ListItem removeSelf={props.removeSelf}
                addTargetItem={props.addTargetItem} 
                key={Item.id}
                parent="Unchecked"
                Item={Item}   
                checkBoxIcon={<MdOutlineRadioButtonUnchecked size='30'/>}/> })}   
        </div>
        
    )}

export default UncheckedList
import { FC, useContext } from "react";
import { ChangePageSwitch } from "../ChangePage"


export interface Item {
    task: string;
    deadline: string;
    priority: string;
    id: number;
    note?: string;
}

interface props {
    Item: Item;
    checkBoxIcon: React.ReactNode;
    parent: string;

    addTargetItem(item: Item): void;
    removeSelf(id: number): void;

    style?: string
}


const ListItem: FC<props> = (props) => {

    const {OpenChangePage} = useContext(ChangePageSwitch)


    function onCheckClicked(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation()
        props.removeSelf(props.Item.id)
        props.addTargetItem(props.Item)
        console.log("checked")
    }

    return (
        <>

            <div className={`grid grid-cols-[auto_minmax(100px,_1fr)_auto] gap-2 text-2xl  pt-2 pb-2 pr-3 pl-3  rounded-xl 
            hover:scale-[1.01] transition-all duration-200 ease-linear cursor-pointer ${`priority-${props.Item.priority}`} ${props.style}`}
                onClick={() => { OpenChangePage(props.Item, props.parent) }} draggable="true">
                <div className="hover:scale-110 transition-all duration-200 ease-linear cursor-pointer" onClick={onCheckClicked}>{props.checkBoxIcon}</div>
                <p className="text-wrap truncate">{props.Item.task}</p>
                <p className="no-wrap">{props.Item.deadline}</p>
            </div>
        </>
    )
}


export default ListItem
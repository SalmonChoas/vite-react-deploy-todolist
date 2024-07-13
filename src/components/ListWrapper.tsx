import AddPage from "./AddPage"

import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import UncheckedList from "./List/UncheckedList";
import CheckedList from "./List/CheckedList";
import OverdueList from "./List/OverdueList";
import { Item } from "./List/ListItem";
import moment from "moment";
import { RiEmotionHappyFill } from "react-icons/ri";
import ChangePage from "./ChangePage";


const ListWrapper = () => {

    let today = moment().format("YYYY-MM-D");

    let tmp = window.localStorage.getItem('UncheckedTodos')
    const [UncheckedTodos, setUncheckedTodos] = useState<Array<Item>>(tmp ? JSON.parse(tmp) : []);
    tmp = window.localStorage.getItem('CheckedTodos')
    const [CheckedTodos, setCheckedTodos] = useState<Array<Item>>(tmp ? JSON.parse(tmp) : []);
    tmp = window.localStorage.getItem('OverdueTodos')
    const [OverdueTodos, setOverdueTodos] = useState<Array<Item>>(tmp ? JSON.parse(tmp) : []);


    const addCheckedTodos = (object: Item) => {
        setCheckedTodos([...CheckedTodos, object])
    }

    const addOverdueTodos = (object: Item) => {
        setOverdueTodos([...OverdueTodos, object])
    }

    const addUncheckedTodos = (object: Item) => {
        if (moment(today).isBefore(object.deadline) || object.deadline === '' || object.deadline === today)
            setUncheckedTodos([...UncheckedTodos, object])
        else
            addOverdueTodos(object)
    }

    const removeUncheckedTodosItem = (id: number) => {
        setUncheckedTodos(UncheckedTodos.filter((item: any) => { return item.id !== id }))
    }

    const removeOverdueTodosItem = (id: number) => {
        setOverdueTodos(OverdueTodos.filter((item: any) => { return item.id !== id }))
    }

    const removeCheckedTodosItem = (id: number) => {
        setCheckedTodos(CheckedTodos.filter((item: any) => { return item.id !== id }))
    }

    const ChangeOverdueTodosItem = (item: Item) => {
        setOverdueTodos(OverdueTodos.map((i: any) => {
            if (i.id === item.id)
                return item
            else
                return i
        }))
    }
    const ChangeUncheckedTodosItem = (item: Item) => {
        setUncheckedTodos(UncheckedTodos.map((i: any) => {
            if (i.id === item.id)
                return item
            else
                return i
        }))
    }
    const ChangeCheckedTodosItem = (item: Item) => {
        setCheckedTodos(CheckedTodos.map((i: any) => {
            if (i.id === item.id)
                return item
            else
                return i
        }))
    }

    function ChangeTodos(target: string, item: Item, deleted: Boolean) {
        if (target === "Overdue") {
            if (deleted)
                removeOverdueTodosItem(item.id)
            else
                ChangeOverdueTodosItem(item)
            return
        }
        if (target === "Unchecked") {
            if (deleted)
                removeUncheckedTodosItem(item.id)
            else
                ChangeUncheckedTodosItem(item)
            return
        }
        if (deleted)
            removeCheckedTodosItem(item.id)
        else
            ChangeCheckedTodosItem(item)
        return
    }


    window.localStorage.setItem("UncheckedTodos", JSON.stringify(UncheckedTodos))
    window.localStorage.setItem("CheckedTodos", JSON.stringify(CheckedTodos))
    window.localStorage.setItem("OverdueTodos", JSON.stringify(OverdueTodos))

    const [isAddPageOpen, setisAddPageOpen] = useState<boolean>(false)



    useEffect(() => {
        let arr = UncheckedTodos.reduce<Array<Array<Item>>>(
            (result, current) => {
                result[moment(today).isBefore(current.deadline) || current.deadline === '' || current.deadline === today ? 0 : 1].push(current)
                return result
            }, [[], []])
        setUncheckedTodos(arr[0])

        if (arr[1].length != 0)
            setOverdueTodos(OverdueTodos.concat(arr[1]))

    }, [])


    return (
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen col-start-2">
            <div className="col-start-2 row-start-1 text-[50px] bg-slate-950 text-white pl-5 content-center">
                <p>Task</p>
            </div>
            <div className=" overflow-y-scroll col-start-2 row-start-2 bg-slate-900 text-gray-100 p-4 space-y-5">
                {(UncheckedTodos.length === 0 && OverdueTodos.length === 0)
                    ? <div className="border-b-2 border-white flex justify-center items-center">
                        <RiEmotionHappyFill size='50' />
                        <p className="text-3xl">All done!!!!!</p>

                    </div> : <></>}
                <ChangePage Change={ChangeTodos}>
                    <OverdueList Todos={OverdueTodos} removeSelf={removeOverdueTodosItem} addTargetItem={addCheckedTodos} />
                    <UncheckedList Todos={UncheckedTodos} removeSelf={removeUncheckedTodosItem} addTargetItem={addCheckedTodos} />
                    <CheckedList Todos={CheckedTodos} removeSelf={removeCheckedTodosItem} addTargetItem={addUncheckedTodos} />

                </ChangePage>
            </div>


            <IoMdAdd className='bg-slate-500 text-white absolute bottom-7 right-7 rounded-3xl transition-all duration-300 ease-linear
             hover:bg-slate-300 hover:text-black hover:rounded-[40px] hover:scale-110' size="70" onClick={() => {
                    setisAddPageOpen(true)
                }} />

            <AddPage isOpen={isAddPageOpen} setisOpen={setisAddPageOpen} addTodos={addUncheckedTodos} />
        </div>

    )
}
export default ListWrapper
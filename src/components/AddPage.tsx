import { FC, useState } from "react"
import { GoTrash } from "react-icons/go";
import { TiDeleteOutline } from "react-icons/ti";
import { Item } from "./List/ListItem"
import moment from "moment";



interface props {
    isOpen: boolean;
    setisOpen(b: boolean): void ;
    addTodos(item: Item): void;
}

const AddPage: FC<props> = (props) => {


    const KEY = "AddPage"
    let tmp = window.sessionStorage.getItem(KEY)
    const [data, setData] = useState<Item>(tmp ? JSON.parse(tmp) : { task: '', deadline: '', priority: 'gray', note: '', id: Math.random() })

    window.sessionStorage.setItem(KEY, JSON.stringify(data))



    return (
        <div className={`absolute top-0 left-0 size-full backdrop-blur-sm bg-white/30 justify-center items-center ${props.isOpen ? 'flex' : 'hidden'}`}>
            <div className="p-5 w-[500px] h-[700px] bg-slate-800 text-white rounded-3xl grid grid-rows-7 gap-5 relative">
                <div className="border-solid border-b border-slate-100 text-[50px] flex justify-center ">AddPage</div>

                <div className="absolute top-3 right-3 hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" onClick={() => { props.setisOpen(false) }}><TiDeleteOutline size="50px" /></div>

                <div>
                    <div className="text-[25px]">Task</div>
                    <div className="flex p-3 bg-slate-900 rounded-md  hover:bg-slate-700 transition-all duration-200 ease-linear">
                        <input className="flex-1 bg-transparent outline-none" type="text" placeholder={"Please input something"}
                            value={data.task} onChange={(e) => {
                                setData({ ...data, task: e.target.value })
                            }} ></input>
                        <div className="hover:scale-110 cursor-pointer transition-all duration-200 ease-linear"><GoTrash size="25px" onClick={() => { setData({ ...data, task: '' }) }} /></div>

                    </div>
                </div>


                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-wrap">
                        <div className="text-[25px] ">Priority</div>
                        <select className="flex-[1_1_200px] p-3 h-12 outline-none bg-slate-900 rounded-md text-white hover:bg-slate-700
                            focus:bg-slate-700 transition-all duration-200 ease-linear" name="priority" value={data.priority} onChange={(e) => {
                                setData({ ...data, priority: e.target.value })

                            }} >
                            <option value="gray"> None </option>
                            <option value='purple'>Very High</option>
                            <option value="blue">High</option>
                            <option value='orange'>Medium</option>
                            <option value="yellow">Low</option>
                            <option value="green">Very Low</option>
                        </select>
                    </div>
                    <div className="flex flex-wrap" >
                        <div className="text-[25px]">Deadline</div>
                        <input className="flex-[1_1_200px] bg-slate-900 p-3 h-12 outline-none first-line: rounded-md hover:bg-slate-700 transition-all duration-200 ease-linear" type="date"
                            value={data.deadline} min={moment().format("YYYY-MM-D")} onChange={(e) => {
                                setData({ ...data, deadline: e.target.value })
                            }} ></input>
                    </div>
                </div>
                <div >
                    <div className="text-[25px]">Note</div>
                    <textarea className=" w-96 bg-slate-900 hover:bg-slate-700 focus:bg-slate-700 transition-all duration-200 ease-linear" value={data.note} onChange={(e) => {
                        setData({ ...data, note: e.target.value })
                    }}></textarea>
                </div>

                <div className="row-start-7 absolute bottom-3 right-4 flex gap-2">
                    <button className="w-24 py-2 bg-slate-900 rounded-md hover:bg-emerald-700 transition-all duration-200 ease-linear" onClick={() => {
                        props.setisOpen(false)
                        props.addTodos(data)
                        setData({ task: '', deadline: '', priority: `gray`, note: '', id: Math.random() })
                    }}>OK</button>
                    <button className="w-24 py-2 bg-slate-900 rounded-md hover:bg-amber-700 transition-all duration-200 ease-linear" onClick={() => {
                        props.setisOpen(false)
                        setData({ task: '', deadline: '', priority: `gray`, note: '', id: Math.random() })
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddPage


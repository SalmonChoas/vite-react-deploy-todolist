import { FC } from "react"

interface props {
    icon: React.ReactNode,
    handleClicked: Function, 
    name: string, 
    isOpen: boolean,
    style?:{
        bg?: string,
        rounded?: string,
        hover_bg?: string,
    }
}

const SideBarItem: FC<props> = (props ) => {

    return (
        <div className={`grid grid-cols-[80px-auto] ${props.style?.bg === null ?  'bg-slate-900' : props.style?.bg}  
                        ${props.style?.rounded === null ?  'rounded-lg' : props.style?.rounded} 
                        ${props.style?.hover_bg === null ?  'hover:bg-slate-300' : props.style?.hover_bg}
                        hover:text-black hover:rounded-[25px] hover:bg-slate-300 bg-slate-900 rounded-lg
                        transition-all duration-200 ease-linear cursor-pointer`} onClick={() => { props.handleClicked() }}>

            <div className="col-start-1 flex justify-center items-center size-20">
                {props.icon}
            </div>
            {props.name !== '' && <p className={`col-start-2 flex items-center text-4xl ${props.isOpen ? 'w-52 ' : 'w-0'} 
                                                overflow-hidden
                                                transition-all duration-200 ease-linear`}>{props.name}</p>}
           
        </div>
    )
}
export default SideBarItem
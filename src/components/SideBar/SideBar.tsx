import { IoIosMenu, IoIosCalendar, IoIosHome, IoIosSettings, IoIosHelp } from "react-icons/io";
import { MdOutlineTask } from "react-icons/md";
import SideBarItem from "./SideBarItem";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [isOpen, setisOpen] = useState<boolean>(false)
    function toggleIsOpen(): void {
        setisOpen(!isOpen);
    }

    const [arrowPosition, setArrowPosition] = useState<string>('[8px]')
    function onNavItemClicked(position: string): void {
        if (arrowPosition === position) {
            toggleIsOpen()
            return
        }
        setArrowPosition(position)
    }

    const selectStyle = {bg: 'bg-blue-600', rounded: 'rounded-[30px]', hover_bg: 'hover:bg-blue-400'}

    return (
        <div className={`grid grid-rows-[auto_auto_1fr_auto] gap-5 bg-black text-white p-3`}>
            <div className="row-start-1 flex">
                {/* 第一種 */}
                <SideBarItem handleClicked={() => { toggleIsOpen(); }} icon={<IoIosMenu size="40" />} name="" isOpen={isOpen} />
            </div>

            <div>
                {/* 分隔線 */}
                <div className={` h-[3px] bg-slate-200 rounded-lg`}></div>
            </div>

            <div className={`row-start-3 space-y-3 relative`}>
                {/* 第二種 */}

                <div>

                    <Link to='/'>
                        <SideBarItem handleClicked={() => { onNavItemClicked('[8px]') }} icon={<IoIosHome size="40" />} name='Home' isOpen={isOpen} 
                        style={arrowPosition === '[8px]' ? selectStyle : {}}/>
                    
                    </Link>
                </div>

                <div>
                    <Link to="/List">
                        <SideBarItem handleClicked={() => { onNavItemClicked('[100px]') }} icon={<MdOutlineTask size="40" />} name='Task' isOpen={isOpen} 
                        style={arrowPosition === '[100px]' ? selectStyle : {}}/>
                    
                    </Link>
                </div>
                <div>
                    <Link to="/Calendar">
                        <SideBarItem handleClicked={() => { onNavItemClicked('[192px]') }} icon={<IoIosCalendar size="40" />} name='Calendar' isOpen={isOpen} 
                        style={arrowPosition === '[192px]' ? selectStyle : {}}/>
                    </Link>
                </div>

                <div className={` absolute top-${arrowPosition} left-[-20px] transition-all duration-200 ease-linear`}>
                    {/* 箭頭 */}
                    <FaCaretRight size="40" />
                </div>
            </div>

            <div className="row-start-4 space-y-3">
                {/* 第三種 */}
                <SideBarItem handleClicked={() => { }} icon={<IoIosHelp size="70" />} name='Help' isOpen={isOpen} />
                <SideBarItem handleClicked={() => { }} icon={<IoIosSettings size="40" />} name='Settings' isOpen={isOpen} />
            </div>

        </div>
    )
}
export default SideBar

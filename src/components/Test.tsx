import { useContext } from "react"
import { ChangePageSwitch } from "./ChangePage"


const Test = () => {

    const {OpenChangePage} = useContext(ChangePageSwitch)
    return (
        <div onClick={() => {OpenChangePage(
            {task: "llll", deadline: "", priority: "rose", note: "", id: 0.30013924793808844})}}>
            Test

        </div>
    )
}

export default Test
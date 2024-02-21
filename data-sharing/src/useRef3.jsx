import { useRef, useState } from "react"

const UseRefDemo3 = () => {
    let name = useRef("")
    let [nameState, setNameState] = useState("")

    const handleRefChange = () => {
        console.log(name.current.value)
    }

    const handleStateChange = (e) => {
        setNameState(e.target.value)
        console.log(nameState)
    }

    return(
       <>
       Ref value: {name.current.value} <br/>
       State value: {nameState} <br/>
       Ref input: <input type="text" ref={name} onChange={handleRefChange}/> <br/>
       State input: <input type="text" value={nameState} onChange={(e) => handleStateChange(e)}/>
       </>
    )
}
export default UseRefDemo3 
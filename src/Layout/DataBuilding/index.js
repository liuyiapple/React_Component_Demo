import React, {useRef, useState} from "react";
import {Button, Input} from "antd";

const DataBuilding = () => {
    const [dataValue, setDataValue] = useState("")
    const hRef = useRef();
    return (
        <div>
            <h1 ref={hRef}>{dataValue}</h1>
            <Input onChange={evt => {
                setDataValue(evt.target.value)
            }}/>
            <Button type={"primary"} onClick={() => console.log(hRef.current.innerText)}> 打印两个值 </Button>
        </div>
    )
}
export default DataBuilding
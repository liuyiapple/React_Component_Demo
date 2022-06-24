import { Button } from "antd-mobile";
import React, { useRef } from "react";

const DiyHook = () => {
    const gotoH2 = useRef()
    const  InputFocusClick = () =>{
        // gotoH2.current.focus()
        console.log(gotoH2.current);
    }
    return (
        <div>

            <h1 ref={gotoH2}>我怕时间太快</h1>
            <input />
            <Button onClick={() => {
                InputFocusClick()
            }}
            type="primary"
            >让input聚焦</Button>
        </div>
    )
}

/**
 * @param useRef
 * 
 *  可以给标签或者组件打上ref标识，只需要 .current的时候，就可以获取到真实DOM的
 * * */
export default DiyHook
import React from "react";
import {Upload, Button} from "antd";
/**
 * @parma accept  接收上传的文件类新
 * */
const GlobalUpload = () => {

    const getAccept = (type) => {
        console.log(type)
    }

    const accept = getAccept("");
    console.log(accept)
    return (
        <div>
            <Upload
            >
                <Button type={"primary"}>文件上传</Button>
            </Upload>
        </div>
    )
}

export default GlobalUpload
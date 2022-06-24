import React from "react";
import { observable,makeAutoObservable } from "mobx"
import {getData} from "../../servers/Http"
import api from "./api"
class store {
    constructor() {
        makeAutoObservable(this)
    }
     groupDataList = []

    getTableList = async () => {
        const {data} = await getData(api.groupList)
        this.getTableList = data || []
    }
}

export default new store()
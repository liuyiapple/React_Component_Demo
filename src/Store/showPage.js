import { observable } from 'mobx'
import React, { useEffect } from 'react'
import userStore from "./users"
export default function showPage() {
    const {getUserInfo,userList} = userStore
    useEffect(() =>{
        getUserInfo()
    })
  return observable(
    <div>
        <ul>
            {
              userList.map(item => {
                return  <li key={item.id}>{item.name}</li>
              })  
            }
        </ul>
    </div>
  )
}

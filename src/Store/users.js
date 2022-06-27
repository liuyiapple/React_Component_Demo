import { makeAutoObservable, runInAction} from "mobx";
 const userStore = makeAutoObservable({
    userList:[],
    getUserInfo(){
        fetch(`http://localhost:3000/users`).then(async res => {
            if(res.ok) {
                this.userList = await res.json()
            } 
            
        })
    }
})
export default userStore
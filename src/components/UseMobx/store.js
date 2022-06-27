import { makeAutoObservable, toJS, runInAction } from "mobx";
const url = "http://localhost:3000";
class Store {
  userList = [];
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }
  getUserList = () => {
    fetch(`${url}/users`).then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        this.userList = toJS(data);
      }
    });
  };
  increment() {
    this.count += 1;
  }
}
const useMobxStore = new Store()
export default useMobxStore;

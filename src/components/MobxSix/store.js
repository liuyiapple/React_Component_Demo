import { makeAutoObservable } from "mobx";
class CountsStore {
  count = 10;
  userInfo = [];
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.count += 1;
  }
  resetCount() {
    this.count = 0;
  }

  getUserInfo() {
    fetch("http://localhost:3000/users").then(async (res) => {
      if (res.ok) {
        this.userInfo = await res.json();
      }
    });
  }
}

export default CountsStore;

import {makeAutoObservable} from "mobx";
export default class User{
    userName: string;
    email: string;
    password: string;
    authentication: boolean;
    agreement: boolean;
    constructor() {
        makeAutoObservable(this);
    }

    // setUser(userName: string, email: string, password: string, authentication: boolean, agreement: boolean){
    //     this.userName = userName;
    //     this.email =
    // }

}
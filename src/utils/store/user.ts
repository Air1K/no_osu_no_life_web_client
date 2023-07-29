import {makeAutoObservable} from "mobx";
import {IUser} from "../../models/IUser";
import AuthService from "../../services/AuthService";
export default new class User{
    user = {} as IUser
    isAuth = false;
    messages = '';
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setMessages(message: string) {
        this.messages = message;
    }

    setIsLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async registration(userName: string, email: string, password: string, agreement: boolean) {
        try {
            console.log(userName, email, password, agreement);
            const response = await AuthService.registration(userName, email, password, agreement);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
            this.setMessages(e.response?.data?.message);
        }
    }
    // setUser(userName: string, email: string, password: string, authentication: boolean, agreement: boolean){
    //     this.userName = userName;
    //     this.email =
    // }

}
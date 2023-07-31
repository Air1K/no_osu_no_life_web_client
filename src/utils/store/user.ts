import {makeAutoObservable} from "mobx";
import {IUser} from "../../models/IUser";
import AuthService from "../../services/AuthService";
import {AuthResponse} from "../../models/response/AuthResponse";
import {API_URL} from "../../http";
import axios from "axios";
export default new class User{
    user = {} as IUser
    isAuth = false;
    messages = '';
    errors = [];
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
        if(!!user.userAvatar) user.userAvatar='https://avatars.mds.yandex.net/i?id=3a3b22b35b8ff3b5c637ace72cafd64fffef509d-7761820-images-thumbs&n=13'
        console.log(this.user)
    }

    setMessages(message: string) {
        this.messages = message;
    }

    setError(errors: []) {
        this.errors = errors;
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

    async checkAuth() {
        this.setIsLoading(true)
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            console.log(response.data.user)

        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setIsLoading(false);
        }
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response);
            this.setMessages(e.response?.data?.message);
            this.setError(e.response?.data?.errors);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    // setUser(userName: string, email: string, password: string, authentication: boolean, agreement: boolean){
    //     this.userName = userName;
    //     this.email =
    // }

}
import {MyError} from "./error";

export class MyUser {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    constructor(name:string, username: string, email: string, password: string, confirmPassword:string){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    save(){
        console.log("saving to database");
    }
    validate(){
        const error = new MyError();
        if(this.username.length < 3){
            error.add("username can not be less then 3 characters");
        }else if(this.username.length > 15){
            error.add("username can not be more then 15 characters");
        } else if(this.password.length < 3){
            error.add("password can not be less then 3 characters");
        } else if(this.password.length > 15){
            error.add("password can not be more then 15 characters");
        } else if(this.password !== this.confirmPassword){
            error.add("password did not matched");
        }
        if(error.errors.length > 0){
            return error;
        }else {
            return "valid user";
        }
    }
}

import React, {useEffect, useState} from 'react';
import user from "../utils/store/user";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";

const AuthButton = ({errorsMasage, setErrors, setStateErrors}) => {
    console.log("Рендер AuthButton")
    const [timer, setTimer] = useState(0)
    let interval
    useEffect(()=>{

        if(!!errorsMasage["limited"]){
            interval = setInterval(()=>{
                setTimer(timer-1)
            }, 1000)
        }
        return ()=>{
            clearInterval(interval)
        }

    }, [timer])
    function delTimer(){
        const time = Number(user.errors[0].dateBan) * 1000;
        console.log(time)
        setTimeout(() => { clearInterval(interval); user.setClear(); setErrors({}); setStateErrors({});}, time);
    }
    useEffect(()=>{
        if(user.errors[0]?.dateBan){
            setTimer(user.errors[0]?.dateBan)
            delTimer()
        }
    }, [user.errors[0]?.dateBan])

    return (
        <Button variant={timer>0 ? "outline-danger": "outline-dark"} type="submit" disabled={timer>0} className={`w-100`} >
            {!!errorsMasage["limited"] ? `Осталось: ${timer} сек.`  :"Войти" }
        </Button>
    );
};

export default observer(AuthButton);
import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import user from "../../../utils/store/user";
import {observer} from "mobx-react-lite";
const MyButtons = ({errorsMasage}) => {
    console.log("рендер MyButtons")
    let interval
    const [timer, setTimer] = useState(null)
    useEffect(()=>{
        if(!!errorsMasage["limited"]){
            interval = setInterval(()=>{
                setTimer(timer-1)
            }, 1000)
            // setTimeout(() => { clearInterval(interval)}, (Number(user.error[0].dateBan) * 1000));
        }
        return ()=>{
            clearInterval(interval)
        }
        console.log(user.errors[0]?.dateBan)
    }, [timer])
    return (
        <Button variant="outline-dark" type="submit" className={`w-100`} onClick={()=>{if(!!errorsMasage["limited"]) setTimer(user.errors[0].dateBan)}}>
            {!!errorsMasage["limited"] ? `${errorsMasage['limited']} Осталось: ${timer} s.`  :"Войти" }
        </Button>
    );
};

export default observer(MyButtons);
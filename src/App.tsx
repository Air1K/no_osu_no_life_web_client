import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./basic/header/header";
import PrivateRoute from "./utils/router/privateRoute";
import PageNotFound from "./pageNotFound";
import './App.sass'
import Discussions from "./basic/tab_window/discussions/discussions";
import Comments from "./basic/tab_window/сomments/comments";
import Links from "./basic/tab_window/links/links";
import 'bootstrap/dist/css/bootstrap.min.css';
import user from "./utils/store/user";
import Main from "./basic/main/main";
import Authorization from "./basic/tab_window/authorization/Authorization";
import {Alert} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Message from "./basic/message/message";
function App() {
    console.log("рендер App")
    return (
        <div style={{overflow: "hidden"}}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    {/*<Route element={<PrivateRoute/>}>*/}
                    {/*    <Route path={`/`} element={<Main/>}/>*/}
                    {/*</Route>*/}
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"/discussions"} element={<Discussions/>}/>
                    <Route path={"/comments"} element={<Comments/>}/>
                    <Route path={"/links"} element={<Links/>}/>
                    <Route path={"/:pageName"} element={<PageNotFound/>}/>
                </Routes>
                {/*<Footer/>*/}
            </BrowserRouter>
            <Message/>
        </div>
    );
}

export default App;

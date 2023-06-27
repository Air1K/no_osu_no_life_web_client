import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./basic/header/header";
import Basic from "./basic/basic";
import PrivateRoute from "./utils/router/privateRoute";
import PageNotFound from "./pageNotFound";
import './App.sass'
import Discussions from "./basic/tab_window/discussions/discussions";
import Comments from "./basic/tab_window/сomments/comments";
import Links from "./basic/tab_window/links/links";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route element={<PrivateRoute/>}>
                        <Route path={`/main admin`} element={<Basic/>}/>
                    </Route>
                    <Route path={"/main"} element={<Basic/>}/>
                    <Route path={"/discussions"} element={<Discussions/>}/>
                    <Route path={"/comments"} element={<Comments/>}/>
                    <Route path={"/links"} element={<Links/>}/>
                    <Route path={"/:pageName"} element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

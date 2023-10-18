import React,{Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";
import FormSimple from "./FormSimple";
import Collatz from "./Collatz";
import Multiplicar from "./Multiplicar";
import Multiplicar2 from "./Multiplicar2";

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cine" element={<Cine/>}/>
                <Route path="/musica" element={<Musica/>}/>
                <Route path="/form" element={<FormSimple/>}/>
                <Route path="/collatz" element={<Collatz/>}/>
                <Route path="/mult" element={<Multiplicar/>}/>ç
                <Route path="/mult2" element={<Multiplicar2/>}/>
            </Routes>
            </BrowserRouter>
        )
    }
}
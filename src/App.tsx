import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StartPage} from "./components/StartPage" ;
import {Cart} from "./components/Cart" ;
import {Resort} from "./components/Resort" ;
import {ChakraProvider} from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage/>}></Route>
                    <Route path="/resort" element={<Resort/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;

import React, {createContext, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StartPage} from "./components/StartPage";
import {Cart} from "./components/Cart";
import {Resort} from "./components/Resort";
import {ChakraProvider} from "@chakra-ui/react";
import {ResortData} from "./models/resorts"
import {UserData} from "./models/user";
import {RoleEnum} from "./models/roleEnum";

interface DataContext {
    resortData: ResortData;
    resortDataModifier: (value: ResortData) => void;
    userData: UserData;
    userDataModifier: (value: UserData) => void;
}

export const DataContext = createContext<DataContext>({
    resortData: {
        curortAdress: "", curortName: "", curortPhonenumber: 0, currortEmail: "", id: 0,
    },
    userDataModifier: (value: UserData)=>{},
    resortDataModifier: (value: ResortData) => {
    },
    userData:{userId:0,userName:"",userRole:RoleEnum.unsign}

});

function App() {
    const [resortData, setResortData] = useState<ResortData>({

        curortAdress: "",
        curortName: "",
        curortPhonenumber: 0,
        currortEmail: "",
        id: 0,

    },);
    const resortDataModifier = (value: ResortData) => {
        setResortData(value);
    };
    const [userData, setUserData]=useState<UserData>({userId:0,userName:"Tomek",userRole:RoleEnum.unsign},);
const userDataModifier=(value: UserData)=>{
    setUserData(value)
    }
    return (
        <DataContext.Provider value={{resortData: resortData,
            resortDataModifier: resortDataModifier, userData:userData,userDataModifier:userDataModifier}}>
            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<StartPage/>}></Route>
                        <Route path="/resort" element={<Resort/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </DataContext.Provider>
    );
}

export default App;

import {DataContext} from "../App";
import {useContext, useEffect, useState} from "react";


export const Resort=()=>{

    const context = useContext(DataContext);

    return(<div>


        {context.resortData.curortName}










    </div>)}
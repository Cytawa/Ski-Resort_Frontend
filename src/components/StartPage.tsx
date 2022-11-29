import {
    Box,
    Stack,
} from "@chakra-ui/react";

import "./StartPage.css";
import Logo from '../files/logo.svg';
import {useNavigate} from "react-router-dom";
import {DataContext} from "../App";
import {useContext, useEffect, useState} from "react";
import {RoleEnum} from "../models/roleEnum";
import Person from "../files/Vector (2).png"
import Bin from "../files/Vector (1).png"
import {EditMenu} from "../models/editModal";
import {AddMenu} from "../models/addModal";
import {findAllByAltText} from "@testing-library/react";
import {NavBar} from "./navBar";



export const StartPage  = () => {
    const context = useContext(DataContext);
    const [resorts, setResorts] = useState([context.resortData]);
const[isChanged, setChanged]=useState(context.isChanged)


    useEffect(() => {
        getApiData()
    }, [context.isChanged]);
    const [user, setUser]=useState({userData:{userId:0,userName:"",userRole:RoleEnum.unsign}})
    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:8088/api/curort/"
        ).then((response) => response.json());

        setResorts(response);
        context.isChangeModifier(false)
    };
    function deleteResort(id:number) {

        fetch(`http://localhost:8088/api/curort/${id}`, {method: 'DELETE'})
        context.isChangeModifier(true)


    }




    const navigate = useNavigate()
    return (<Box className={"background"} display="flex" flexDirection={"column"} alignContent={"center"}>
                <NavBar/>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}
                 justifyItems={"center"} justifyContent={"center"} height='100%'>
                    <Stack maxWidth='557px' minWidth='557px' marginRight='51%' marginLeft='11%'>
                        <p className={"selectSki"}>Select Ski Resort</p>
                            {resorts.map((resort) => {
                                return (
                                <Box className={"boxSelect"}
                                    justifyContent={"space-between"} key={resort.id}>
                                    <Box onClick={() => [navigate("../resort"),
                                        context.resortData = resort]} >{resort.curortName+resort.id}
                                    </Box>
                                    {context.userData.userRole === RoleEnum.admin && (
                                    <Box display={"flex"} flexDirection={"row"} width='75px' justifyContent={"space-between"}>
                                        <EditMenu ></EditMenu>
                                        <img src={Bin} onClick={()=>deleteResort(resort.id)}/></Box>)}
                                    </Box>)})}
                                <Box display={"flex"} flexDirection={"row-reverse"} >{context.userData.userRole === RoleEnum.admin && (
                                <AddMenu ></AddMenu>)}
                                 </Box>
                </Stack>
            </Box>
        </Box>


    )
}
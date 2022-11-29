import {
    Box,
    Button, FormControl, FormLabel, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure
} from "@chakra-ui/react";

import "./StartPage.css";
import Logo from '../files/logo.svg';
import {useNavigate} from "react-router-dom";
import {DataContext} from "../App";
import {useContext, useEffect, useState} from "react";
import {RoleEnum} from "../models/roleEnum";
import Edit from "../files/Vector.png"
import Bin from "../files/Vector (1).png"
import {EditMenu} from "../models/editModal";
import {AddMenu} from "../models/addModal";
import {render} from "react-dom";


export const StartPage = () => {
    const context = useContext(DataContext);
    const [resorts, setResorts] = useState([context.resortData]);
    //useEffect(()=>{EditMenu(},[]);


    useEffect(() => {
        getApiData()
    }, []);
    const [user, setUser]=useState({userData:{userId:0,userName:"",userRole:RoleEnum.unsign}})
    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:8088/api/curort/"
        ).then((response) => response.json());

        setResorts(response);
    };
    function deleteResort(id:number) {

        fetch(`http://localhost:8088/api/curort/${id}`, {method: 'DELETE'})

    }




    const navigate = useNavigate()
    return (<Box className={"background"} display="flex" flexDirection={"column"} alignContent={"center"}>
            <Box className={"navBar"}>

                <img className={"logo"} src={Logo} alt="logo"></img>

                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                    {context.userData.userRole === RoleEnum.admin && (
                    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                        <button className={"signButton"}>Singup</button>
                    <button className={"button"}>LOGIN</button><Box marginRight='16px'></Box>
                    </Box>)}</Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}
                 justifyItems={"center"} justifyContent={"center"} height='100%'>
                <Stack maxWidth='557px' minWidth='557px' marginRight='51%' marginLeft='11%'>
                    <p className={"selectSki"}>Select Ski Resort</p>

                    {resorts.map((resort) => {
                        return (
                            <Box className={"boxSelect"}
                                  justifyContent={"space-between"}>
                                <div onClick={() => [navigate("../resort"),
                                    context.resortData.curortName = resort.curortName]}>{resort.curortName+" "+resort.id}</div>
                                {context.userData.userRole === RoleEnum.admin && (
                                    <Box display={"flex"} flexDirection={"row"} width='75px' justifyContent={"space-between"}>


                                <EditMenu /><img src={Bin} onClick={()=>deleteResort(resort.id)}/></Box>)}
                            </Box>)
                    })}
                    <Box display={"flex"} flexDirection={"row-reverse"} >{context.userData.userRole === RoleEnum.admin && (
                        <AddMenu/>)}</Box>
                </Stack>
            </Box>
        </Box>


    )
}
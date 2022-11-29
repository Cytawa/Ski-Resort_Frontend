import {NavBar} from "./navBar";
import {Box, Button} from "@chakra-ui/react";
import Arrow from "../files/Vector (3).png"

export const Cart=()=>{
    return(
        <Box>
            <NavBar/>
            <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
                <p className={"summary"}>Summary:</p>

            <Box background={"gray"} width='908px' height='376px'>


            </Box>
                <Box width='908px' display={"flex"} flexDirection={"row"} justifyContent={"space-between"} marginTop='20px'>
                    <Box display={"flex"} flexDirection={"row"} width='200px'><img height={'10px'} src={Arrow}   /><Box className={"backToShop"} marginLeft='14px' width='144px' height='40px'> Back to Shop </Box></Box>
                    <Button className={"signButton"} marginRight='0px' background={"#4079A0"} color={"#FFFFFF"} width='144px' height='40px'>Confirm Order</Button>

                </Box>
            </Box>
        </Box>)}
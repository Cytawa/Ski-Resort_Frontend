import Logo from "../files/logo.svg";
import {Box} from "@chakra-ui/react";
import {RoleEnum} from "../models/roleEnum";
import Person from "../files/Vector (2).png";
import {useContext} from "react";
import {DataContext} from "../App";


export function NavBar()  {
    const context = useContext(DataContext);
return(

<Box className={"navBar"}>
    <img className={"logo"} src={Logo} alt="logo"></img>
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>

        {context.userData.userRole === RoleEnum.unsign?
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                <button className={"signButton"}>Singup</button>
                <button className={"button"}>Login</button>
                <Box marginRight='43px'></Box>
            </Box> : <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                <Box display="flex" flexDirection={"row"} ><img alt={"Person Icon"} src={Person} width='16px'/>
                    <p className={"person"}>{context.userData.userName}</p></Box>
                <button className={"button"}>Logout</button>
                <Box marginRight='43px'></Box>
            </Box>
        }


    </Box>
</Box>


)}
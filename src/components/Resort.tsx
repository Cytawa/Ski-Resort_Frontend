import {DataContext} from "../App";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@chakra-ui/react";


export const Resort=()=>{

    const context = useContext(DataContext);
    const navigate = useNavigate()
    return(<div>


        {context.resortData.id}
<Button className={"signButton"} onClick={()=>navigate("/cart")}>Koszyk</Button>









    </div>)}
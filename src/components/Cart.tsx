import {NavBar} from "./navBar";
import {
    Box,
    FormControl,
    FormLabel,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput, NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import Arrow from "../files/Vector (3).png"
import {useNavigate} from "react-router-dom";
import Bin from "../files/Vector (1).png";
import {useContext, useEffect, useState} from "react";
import {DataContext} from "../App";

export const Cart = () => {

    const equipments = [{
        id:1,
        quipmentType: "Ski",
        brand: "Brand1",
        cost: 10
    },{id:2,
        quipmentType: "Gogle",
        brand: "Brand2",
        cost: 20
    },{id:3,
        quipmentType: "Helmet",
        brand: "Brand3",
        cost: 50
    },{id:4,
        quipmentType: "Snowboard",
        brand: "Brand4",
        cost: 55
    }]


    const navigate = useNavigate()
    const context = useContext(DataContext);
    const [bill, setBill] = useState(context.billData)
    const [resort, setResort] = useState(context.billData.curort)
    useEffect(() => {
        getApiData()
    }, []);

    useEffect(() => {
        setResort(context.resortData);

    }, []);

    const getApiData = async () => {

        const response = await fetch(`http://localhost:8088/api/bill/${context.userData.userId}`

            , {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            }).then().then((response) => response.json());

        setBill(response)


    };


    return (
        <Box>
            <NavBar/>
            <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
                <p className={"summary"}>Summary:</p>

                <Box width='908px'>
                    <Box className={"summaryBar"} background={"white"} height='40px' display={"flex"}
                         flexDirection={"row"} marginTop='12px' marginBottom='12px'>
                        <Box width='210px' marginLeft='16px' paddingLeft='24px'>Equipment Type</Box>
                        <Box width='252px' paddingLeft='24px'>Brand</Box>
                        <Box width='130px' paddingLeft='24px'>Cost</Box>
                        <Box width='175px' paddingLeft='24px'>Amount</Box>
                        <Box width='96px'></Box>

                    </Box>
                    {equipments.map((equipment)=>{
                        return( <Box className={"summaryBar"} background={"white"} height='40px' display={"flex"}
                                     flexDirection={"row"} marginTop='12px' marginBottom='12px' key={equipment.id}>
                            <Box width='210px' marginLeft='16px' paddingLeft='24px'>{equipment.quipmentType}</Box>
                            <Box width='252px' paddingLeft='24px'>{equipment.brand}</Box>
                            <Box width='130px' paddingLeft='24px'>{equipment.cost}</Box>
                            <Box width='175px' paddingLeft='24px'><FormControl>

                                <NumberInput max={10} min={1}>
                                    <NumberInputField/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper/>
                                        <NumberDecrementStepper/>
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl></Box>
                            <Box width='96px' display={"flex"} justifyContent={"center"}>
                                <img alt={"Bin"} src={Bin} /></Box>

                        </Box>)

                    })}


                </Box>
                <Box width='908px' display={"flex"} flexDirection={"row"} justifyContent={"space-between"}
                     marginTop='20px'>
                    <Box onClick={() => navigate('/resort')} display={"flex"} flexDirection={"row"} width='200px'>
                        <Box className={"backToShop"} marginLeft='14px' width='144px' height='40px'> Back to Shop </Box></Box>
                    <button className={"buttonAdd"} onClick={() => navigate('/confirmation')}>Confirm Order</button>

                </Box>
            </Box>
            <Box>Bill Id {bill.id}</Box>
            <Box>Resort name {resort.curortName}</Box>
            <Box>Resort name {resort.id}</Box>
            <Box>Bill date {bill.creationData}</Box>
            <Box>User Id {context.userData.userId}</Box>
        </Box>)
}
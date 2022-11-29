import {
    Button,
    FormControl, FormLabel, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import Edit from "../files/Vector.png";
import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../App";


export function  EditMenu()   {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const context = useContext(DataContext);

    const onResortNameChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        context.resortDataModifier({
            ...context.resortData,
            curortName: event.currentTarget.value,
        });
    };
    const onResortEmailChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        context.resortDataModifier({
            ...context.resortData,
            currortEmail: event.currentTarget.value,
        });
    };
    const onResortAddressChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        context.resortDataModifier({
            ...context.resortData,
            curortAdress: event.currentTarget.value,
        });
    };
    const onResortPhoneChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        context.resortDataModifier({
            ...context.resortData,
            curortPhonenumber: event.currentTarget.valueAsNumber
        });
    };


    async function  handleClic(id:number) {
        await fetch(`http://localhost:8088/api/curort/${id}`

            , {
                method: 'PUT',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(
                    {
                        "curortName": context.resortData.curortName,
                        "curortAdress": context.resortData.curortAdress,
                        "currortEmail": context.resortData.currortEmail,
                        "curortPhonenumber": context.resortData.curortPhonenumber
                    }
                )
            })
        context.isChangeModifier(true)
        onClose()


    }

    return (
        <>

            <img src={Edit} onClick={onOpen
                                }/>

            <Modal

                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Resort</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Resort Name</FormLabel>
                            <Input placeholder='Resort name' value={context.resortData.curortName}
                                   onChange={onResortNameChanged}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Address</FormLabel>
                            <Input placeholder='Address' value={context.resortData.curortAdress}
                                   onChange={onResortAddressChanged}/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Phone number</FormLabel>
                            <Input placeholder='Phone number' value={context.resortData.curortPhonenumber}
                                   onChange={onResortPhoneChanged}/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>E-mail</FormLabel>
                            <Input placeholder='E-mail'
                                   value={context.resortData.currortEmail}
                                   onChange={onResortEmailChanged}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button className={"button"} colorScheme='blue' mr={3} onClick={()=>handleClic(context.resortData.id)}>
                            Edit
                        </Button>
                        <Button className={"button"} onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


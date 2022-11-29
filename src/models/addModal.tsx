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
import {useContext, useEffect} from "react";
import {DataContext} from "../App";
import {render} from "react-dom";
import {StartPage} from "../components/StartPage";
import ReactDOM from "react-dom/client";

export function AddMenu()  {
    const {isOpen, onOpen, onClose} = useDisclosure()
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
async function  handleClic() {
    await fetch(`http://localhost:8088/api/curort/`

        , {
            method: 'POST',
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
    onClose()

}
    return (
        <>

            <button className={"button"} onClick={onOpen}>+ Add</button>

            <Modal

                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Add your account</ModalHeader>
                    <ModalCloseButton/>
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
                        <Button colorScheme='blue' mr={3} onClick={()=>handleClic()}>
                            Add
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


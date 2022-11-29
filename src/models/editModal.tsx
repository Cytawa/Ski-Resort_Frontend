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

export function EditMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <>

            <img src={Edit} onClick={onOpen}/>

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
                            <Input  placeholder='Resort name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Address</FormLabel>
                            <Input placeholder='Address' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Phone number</FormLabel>
                            <Input placeholder='Phone number' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>E-mail</FormLabel>
                            <Input placeholder='E-mail' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button className={"button"} colorScheme='blue' mr={3}>
                            Edit
                        </Button>
                        <Button className={"button"} onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


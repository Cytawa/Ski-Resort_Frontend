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
import Bin from "../files/Vector (1).png";

export function AddMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <>

            <button className={"button"} onClick={onOpen}>+ Add</button>

            <Modal

                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add your account</ModalHeader>
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
                        <Button colorScheme='blue' mr={3}>
                            Add
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


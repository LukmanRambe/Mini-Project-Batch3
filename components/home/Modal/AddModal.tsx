import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Image
} from '@chakra-ui/react'
import { IAddModal } from '../../../ts/interface'

const AddModal = ({ isOpen, onClose }: IAddModal) => {
    const date = new Date()
    let tempHours = `${date.getHours() < 10 ? '0' : ' '}${date.getHours()}`;
    let tempMinustes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;

    const [data, setData] = useState({
        judul_task: '',
        komentar_task: '',
        jam_task: `${tempHours}:${tempMinustes}`,
        tanggal_task: date.toISOString().substring(0, 10)
    })

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data, [event.target.name]: event.target.value
        })
    }
    const onHandleAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({
            ...data, [event.target.name]: event.target.value
        })
    }
    const onSubmit = () => {
        console.log(data)
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign='center' color='#BA181B'>Task</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl isRequired mb={5}>
                        <FormLabel fontWeight='bold'>Judul Task</FormLabel>
                        <Input
                            placeholder='Judul Task'
                            name='judul_task'
                            value={data.judul_task}
                            onChange={(event) => onHandleChange(event)}
                        />
                    </FormControl>
                    <FormControl mb={5}>
                        <FormLabel fontWeight='bold'>Komentar Task</FormLabel>
                        <Textarea
                            placeholder='Komentar Task'
                            name='komentar_task'
                            value={data.komentar_task}
                            onChange={(event) => onHandleAreaChange(event)}
                        />
                    </FormControl>
                    <FormControl w={180} mb={5}>
                        <FormLabel fontWeight='bold'>Jam Task</FormLabel>
                        <Input
                            placeholder='Select Date and Time'
                            type='time'
                            name='jam_task'
                            value={data.jam_task}
                            onChange={(e) => onHandleChange(e)}
                        />
                    </FormControl>
                    <FormControl w={180} mb={5}>
                        <FormLabel fontWeight='bold'>Tanggal Task</FormLabel>
                        <Input
                            placeholder='Select Date and Time'
                            type='date'
                            name='tanggal_task'
                            value={data.tanggal_task}
                            onChange={(event) => onHandleChange(event)}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter
                    justifyContent='center'
                    backgroundColor='rgba(186, 24, 27, 0.02)'
                    boxShadow='0px -4px 22px rgba(0, 0, 0, 0.1)'
                    pt={10}
                    pb={5}
                >
                    <Image
                        position='absolute'
                        right={0}
                        alt='footer'
                        src='https://mini-project-vocasia.vercel.app/image/custom/vektor1.svg'
                    />
                    <Button
                        bg='#BA181B'
                        size='lg'
                        _hover={{ bg: '#9e2427' }}
                        color='#fff'
                        _active={{
                            bg: '#9e2427',
                            transform: 'scale(0.98)'
                        }}
                        onClick={onSubmit}
                        w={175}
                    >Tambahkan</Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddModal
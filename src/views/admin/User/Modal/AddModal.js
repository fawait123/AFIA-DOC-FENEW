import PropTypes from 'prop-types'
import MainModal from 'components/modal/MainModal'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import httpRequest from 'utils/httpRequest'
import { notification } from 'antd'

const handleNotification = (type, title, text) => {
    notification[type]({
        message: title,
        description: text,
        zIndex: 99999999999,
        placement: 'topRight',
    })
}

const AddModal = ({ open, modalToggle, onSuccess }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const is_active = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const specialistData = {
            name,
            email,
            username,
            password,
        }

        try {
            // const response = await fetch(
            //     'http://127.0.0.1:8000/api/user/store',
            //     {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(specialistData),
            //     }
            // )

            // const data = await response.json()

            // if (data.status == true) {
            //     alert('data berhasil masuk')
            // }
            await httpRequest({
                url: 'admin/user',
                method: 'post',
                data: specialistData,
            }).then((response) => {
                handleNotification(
                    'success',
                    'Successfully',
                    response?.data?.results?.message || 'Success'
                )
            })

            setName('')
            setUsername('')
            setPassword('')
            setEmail('')

            modalToggle()
            onSuccess()
        } catch (error) {
            console.log('Store Failed', error)
        }
    }

    return (
        <MainModal open={open} modalToggle={modalToggle}>
            <Box>
                <Typography variant="h6">Add new user item</Typography>
            </Box>
            <Box paddingY={3}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="name"
                        label="Nama"
                        placeholder="Nama Anda"
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        name="name"
                        sx={{ marginY: 2 }}
                    />
                    <TextField
                        id="username"
                        label="Username"
                        placeholder="dasterkuning12"
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        name="username"
                        sx={{ marginY: 2 }}
                    />
                    <TextField
                        id="email"
                        label="Email"
                        placeholder="email@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        name="email"
                        type="email"
                        sx={{ marginY: 2 }}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        name="password"
                        type="password"
                        sx={{ marginY: 2 }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="error"
                        sx={{
                            width: 1,
                            fontSize: 16,
                            fontWeight: 600,
                            paddingY: 1,
                            marginTop: 2,
                        }}
                    >
                        Save
                    </Button>
                </form>
            </Box>
        </MainModal>
    )
}

AddModal.propTypes = {
    open: PropTypes.bool,
    modalToggle: PropTypes.func,
    onSuccess: PropTypes.func,
}

export default AddModal

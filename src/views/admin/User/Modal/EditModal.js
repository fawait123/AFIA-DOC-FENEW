import PropTypes from 'prop-types'
import MainModal from 'components/modal/MainModal'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
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

const EditModal = ({ open, modalToggle, id, onSuccess }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // const getData = async () => {
    //     try {
    //         const response = await fetch(
    //             'http://127.0.0.1:8000/api/user/edit/' + id
    //         )
    //         const data = await response.json()
    //         setName(data.data.name)
    //         setEmail(data.data.email)
    //         setUsername(data.data.username)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const getData = async () => {
        httpRequest({
            url: 'admin/user',
            type: 'get',
            params: {
                id: id,
            },
        }).then((response) => {
            let data = response.data.results.data.rows
            setName(data[0].name)
            setEmail(data[0].email)
            setUsername(data[0].username)
        })
    }

    useEffect(() => {
        getData()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const specialistData = { id, name, username, password, email }

        try {
            // const response = await fetch(
            //     'http://127.0.0.1:8000/api/user/edit',
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
                method: 'PUT',
                params: {
                    id: id,
                },
                body: specialistData,
            }).then((response) => {
                handleNotification(
                    'success',
                    'Error',
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
                <Typography variant="h6">Edit user item</Typography>
            </Box>
            <Box paddingY={3}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="name"
                        label="Nama"
                        placeholder="Nama Anda"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        name="name"
                        sx={{ marginY: 2 }}
                    />
                    <TextField
                        id="username"
                        label="Username"
                        placeholder="dasterkuning12"
                        value={username}
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
                        value={email}
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

EditModal.propTypes = {
    open: PropTypes.bool,
    modalToggle: PropTypes.func,
    id: PropTypes.number,
    onSuccess: PropTypes.func,
}

export default EditModal

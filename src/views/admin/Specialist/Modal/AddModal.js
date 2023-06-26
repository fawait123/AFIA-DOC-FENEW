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

const AddModal = ({ open, modalToggle }) => {
    const [name, setName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const specialistData = { name }

        try {
            // const response = await fetch(
            //     'http://127.0.0.1:8000/api/spesialis/store',
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
                url: 'admin/specialist',
                method: 'post',
                data: specialistData,
            }).then((response) => {
                handleNotification(
                    'success',
                    'Success',
                    response?.data?.results?.message || 'Successfully'
                )
            })

            setName('')

            modalToggle()
        } catch (error) {
            console.log('Store Failed', error)
        }
    }

    return (
        <MainModal open={open} modalToggle={modalToggle}>
            <Box>
                <Typography variant="h6">Add new specialist item</Typography>
            </Box>
            <Box paddingY={3}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="specialist-name"
                        label="Specialist Name"
                        placeholder="Jantung"
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        name="name"
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
}

export default AddModal

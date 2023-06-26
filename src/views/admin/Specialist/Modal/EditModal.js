import PropTypes from 'prop-types'
import MainModal from 'components/modal/MainModal'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const EditModal = ({ open, modalToggle, id, onSuccess }) => {
    const [name, setName] = useState('')

    const getData = async () => {
        try {
            const response = await fetch(
                'http://127.0.0.1:8000/api/spesialis/edit/' + id
            )
            const data = await response.json()
            setName(data.data.name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const specialistData = { id, name }

        try {
            const response = await fetch(
                'http://127.0.0.1:8000/api/spesialis/edit',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(specialistData),
                }
            )

            const data = await response.json()

            if (data.status == true) {
                alert('data berhasil masuk')
            }

            setName('')

            modalToggle()

            onSuccess()
        } catch (error) {
            console.log('Store Failed', error)
        }
    }

    return (
        <MainModal open={open} modalToggle={modalToggle}>
            <Box>
                <Typography variant="h6">Edit specialist item</Typography>
            </Box>
            <Box paddingY={3}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="specialist-name"
                        label="Specialist Name"
                        placeholder="Jantung"
                        value={name}
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

EditModal.propTypes = {
    open: PropTypes.bool,
    modalToggle: PropTypes.func,
    id: PropTypes.number,
    onSuccess: PropTypes.func,
}

export default EditModal

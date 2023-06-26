import PropTypes from 'prop-types'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'

const DoctorAction = ({ id, onSuccess }) => {
    const handleEdit = () => {
        window.location.href = '/admin/dokter/' + id
    }

    const handleDelete = async () => {
        // Perform delete operation

        const specialistData = { id }

        try {
            const response = await fetch(
                'http://127.0.0.1:8000/api/dokter/delete',
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
                onSuccess()
            }
        } catch (error) {
            console.log('Delete Failed', error)
        }
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                onClick={handleEdit}
                sx={{
                    border: '1px #eeeeee solid',
                    borderRadius: 10,
                    width: 32,
                    height: 32,
                }}
            >
                <Edit sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
                onClick={handleDelete}
                sx={{
                    border: '1px #eeeeee solid',
                    borderRadius: 10,
                    width: 32,
                    height: 32,
                    marginLeft: 1,
                }}
            >
                <DeleteOutline sx={{ fontSize: 18 }} />
            </IconButton>
        </Box>
    )
}

DoctorAction.propTypes = {
    id: PropTypes.number.isRequired,
    onSuccess: PropTypes.func.isRequired,
}

export default DoctorAction

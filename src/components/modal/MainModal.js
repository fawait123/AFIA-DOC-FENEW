import { Backdrop, Box, Fade, Modal } from '@mui/material'
import PropTypes from 'prop-types'

const MainModal = ({ width, open, modalToggle, children }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width,
        bgcolor: 'background.paper',
        border: 0,
        boxShadow: 24,
        p: 4,
    }

    return (
        <>
            <Modal
                open={open}
                onClose={modalToggle}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>{children}</Box>
                </Fade>
            </Modal>
        </>
    )
}

MainModal.propTypes = {
    width: PropTypes.number,
    open: PropTypes.bool,
    modalToggle: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default MainModal

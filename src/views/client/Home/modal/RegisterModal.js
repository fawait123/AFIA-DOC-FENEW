import PropTypes from 'prop-types'
import MainModal from '../../../../components/modal/MainModal'
import {
    Box,
    Button,
    Card,
    CardMedia,
    Link,
    TextField,
    Typography,
} from '@mui/material'
import logo from '../../../../assets/images/logo.png'
import { useState } from 'react'

const RegisterModal = ({ open, modalToggle, loginToggle }) => {
    const [name, setName] = useState('')

    const [username, setUsername] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    console.log(name + ' ' + email + ' ' + username + ' ' + password)

    return (
        <MainModal
            width={{ xs: 300, md: 400 }}
            open={open}
            modalToggle={modalToggle}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <CardMedia
                        component="img"
                        image={logo}
                        alt="afia-logo"
                        sx={{ width: 72, height: 72 }}
                    />
                </Card>
            </Box>
            <Box
                marginY={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Register to Afia Doc
                </Typography>
            </Box>
            <Box
                marginTop={-2}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Typography>Create your account here</Typography>
            </Box>
            <Box paddingY={{ xs: 1, md: 3 }}>
                <form>
                    <Box marginY={1}>
                        <TextField
                            required
                            id="outlined-required"
                            placeholder="name"
                            variant="outlined"
                            fullWidth
                            label="Name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: '#4650c0',
                                    },
                            }}
                        />
                    </Box>
                    <Box marginY={1}>
                        <TextField
                            required
                            id="outlined-required"
                            placeholder="username"
                            variant="outlined"
                            fullWidth
                            label="Username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: '#4650c0',
                                    },
                            }}
                        />
                    </Box>
                    <Box marginY={1}>
                        <TextField
                            required
                            id="outlined-required"
                            placeholder="email"
                            variant="outlined"
                            fullWidth
                            label="Email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: '#4650c0',
                                    },
                            }}
                        />
                    </Box>
                    <Box marginY={1}>
                        <TextField
                            required
                            id="outlined-required"
                            placeholder="password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            label="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: '#4650c0',
                                    },
                            }}
                        />
                    </Box>
                    <Box marginTop={2} marginBottom={{ xs: 1, md: 2 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                bgcolor: '#d92527',
                                color: 'white',
                                '&:hover': { bgcolor: 'red' },
                            }}
                            type="submit"
                        >
                            REGISTER
                        </Button>
                    </Box>
                </form>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'end',
                    paddingX: 4,
                }}
            >
                <Typography
                    sx={{ fontSize: { xs: 12, md: 16 } }}
                    marginRight={1}
                >
                    Already have account?
                </Typography>
                <Link
                    onClick={loginToggle}
                    underline="always"
                    sx={{
                        color: 'blue',
                        cursor: 'pointer',
                        fontSize: { xs: 12, md: 16 },
                    }}
                >
                    Sign In
                </Link>
            </Box>
        </MainModal>
    )
}

RegisterModal.propTypes = {
    open: PropTypes.bool,
    modalToggle: PropTypes.func,
    loginToggle: PropTypes.func,
}

export default RegisterModal

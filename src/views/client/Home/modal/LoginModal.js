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

const LoginModal = ({ open, modalToggle, registerToggle }) => {
    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const loginData = { username, password }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            })

            const data = await response.json()

            sessionStorage.setItem('token', data.token)
            sessionStorage.setItem('user', JSON.stringify(data.user))

            setUsername('')
            setPassword('')

            const user = JSON.parse(sessionStorage.getItem('user'))

            if (user && user.name === 'ananta') {
                sessionStorage.setItem('admin', true)
                window.location.href = '/admin/dashboard'
            } else {
                window.location.href = '/'
            }

            modalToggle()
        } catch (error) {
            console.log('Login Failed', error)
        }
    }

    return (
        <MainModal
            width={{ xs: 300, md: 400 }}
            open={open}
            modalToggle={modalToggle}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
            <Box marginY={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Welcome to Afia Doc
                </Typography>
            </Box>
            <Box
                marginTop={-2}
                sx={{ display: 'flex', justifyContent: 'center' }}
            >
                <Typography>Please login to your account</Typography>
            </Box>
            <Box paddingY={3}>
                <form onSubmit={handleSubmit}>
                    <Box marginY={1}>
                        <TextField
                            required
                            id="outlined-required"
                            placeholder="username"
                            variant="outlined"
                            onChange={(e) => setUsername(e.target.value)}
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: '#4650c0',
                                    },
                            }}
                        />
                    </Box>
                    <Box marginY={2}>
                        <TextField
                            required
                            id="outlined-required"
                            placeholder="password"
                            variant="outlined"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: '#4650c0',
                                    },
                            }}
                        />
                    </Box>
                    <Box marginY={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            sx={{
                                bgcolor: '#d92527',
                                color: 'white',
                                '&:hover': { bgcolor: 'red' },
                            }}
                        >
                            LOGIN
                        </Button>
                    </Box>
                </form>
            </Box>
            <Box
                sx={{
                    width: 1,
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
                    {"Don't have account?"}
                </Typography>
                <Link
                    onClick={registerToggle}
                    underline="always"
                    sx={{
                        color: 'blue',
                        cursor: 'pointer',
                        fontSize: { xs: 12, md: 16 },
                    }}
                >
                    Sign Up
                </Link>
            </Box>
        </MainModal>
    )
}

LoginModal.propTypes = {
    open: PropTypes.bool,
    modalToggle: PropTypes.func,
    registerToggle: PropTypes.func,
}

export default LoginModal

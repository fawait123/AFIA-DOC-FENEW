import {
    Box,
    Button,
    Grid,
    IconButton,
    Switch,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Doctor from '..'
import { HorizontalRule } from '@mui/icons-material'

const PracticeDoctor = () => {
    const theme = useTheme()

    const isMed = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Doctor>
            <Box
                sx={{
                    width: 1,
                    minHeight: { xs: 'auto', md: 530 },
                    bgcolor: '#fff',
                    paddingX: { xs: 2, md: 8 },
                    paddingY: { xs: 2, md: 4 },
                    marginY: { xs: 6, md: 2 },
                }}
            >
                <Box>
                    <Typography sx={{ fontSize: { xs: 16, md: 24 } }}>
                        Jam Praktek Saya
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 12, md: 16 } }}>
                        Atur jam praktek untuk memudahkan pasien
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: { xs: 295, md: 500 },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px #e0e0e0 solid',
                        borderRadius: 2,
                        marginY: { xs: 2, md: 4 },
                        padding: 2,
                    }}
                >
                    <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                        Setiap hari sama
                    </Typography>
                    <Switch />
                </Box>
                <Grid container columns={2} spacing={{ xs: 1, md: 20 }}>
                    <Grid item md={1}>
                        <Grid container columns={2} rowGap={1}>
                            <Grid item md={2}>
                                <Box
                                    sx={{
                                        width: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            border: 1,
                                            width: { xs: 40, md: 56 },
                                            height: { xs: 40, md: 56 },
                                            fontSize: { xs: 10, md: 14 },
                                        }}
                                    >
                                        SUN
                                    </IconButton>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            marginX: { xs: 2, md: 0 },
                                        }}
                                    >
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                        <IconButton>
                                            <HorizontalRule
                                                sx={{
                                                    fontSize: {
                                                        xs: 14,
                                                        md: 24,
                                                    },
                                                    fontWeight: {
                                                        xs: 500,
                                                        md: 600,
                                                    },
                                                }}
                                            />
                                        </IconButton>
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={2}>
                                <Box
                                    sx={{
                                        width: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            border: 1,
                                            width: { xs: 40, md: 56 },
                                            height: { xs: 40, md: 56 },
                                            fontSize: { xs: 10, md: 14 },
                                        }}
                                    >
                                        MON
                                    </IconButton>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            marginX: { xs: 2, md: 0 },
                                        }}
                                    >
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                        <IconButton>
                                            <HorizontalRule
                                                sx={{
                                                    fontSize: {
                                                        xs: 14,
                                                        md: 24,
                                                    },
                                                    fontWeight: {
                                                        xs: 500,
                                                        md: 600,
                                                    },
                                                }}
                                            />
                                        </IconButton>
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={2}>
                                <Box
                                    sx={{
                                        width: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            border: 1,
                                            width: { xs: 40, md: 56 },
                                            height: { xs: 40, md: 56 },
                                            fontSize: { xs: 10, md: 14 },
                                        }}
                                    >
                                        TUE
                                    </IconButton>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            marginX: { xs: 2, md: 0 },
                                        }}
                                    >
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                        <IconButton>
                                            <HorizontalRule
                                                sx={{
                                                    fontSize: {
                                                        xs: 14,
                                                        md: 24,
                                                    },
                                                    fontWeight: {
                                                        xs: 500,
                                                        md: 600,
                                                    },
                                                }}
                                            />
                                        </IconButton>
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={2}>
                                <Box
                                    sx={{
                                        width: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            border: 1,
                                            width: { xs: 40, md: 56 },
                                            height: { xs: 40, md: 56 },
                                            fontSize: { xs: 10, md: 14 },
                                        }}
                                    >
                                        WED
                                    </IconButton>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            marginX: { xs: 2, md: 0 },
                                        }}
                                    >
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                        <IconButton>
                                            <HorizontalRule
                                                sx={{
                                                    fontSize: {
                                                        xs: 14,
                                                        md: 24,
                                                    },
                                                    fontWeight: {
                                                        xs: 500,
                                                        md: 600,
                                                    },
                                                }}
                                            />
                                        </IconButton>
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={1}>
                        <Grid container columns={2} rowGap={1}>
                            <Grid item md={2}>
                                <Box
                                    sx={{
                                        width: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            border: 1,
                                            width: { xs: 40, md: 56 },
                                            height: { xs: 40, md: 56 },
                                            fontSize: { xs: 10, md: 14 },
                                        }}
                                    >
                                        THU
                                    </IconButton>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            marginX: { xs: 2, md: 0 },
                                        }}
                                    >
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                        <IconButton>
                                            <HorizontalRule
                                                sx={{
                                                    fontSize: {
                                                        xs: 14,
                                                        md: 24,
                                                    },
                                                    fontWeight: {
                                                        xs: 500,
                                                        md: 600,
                                                    },
                                                }}
                                            />
                                        </IconButton>
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={2}>
                                <Box
                                    sx={{
                                        width: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            border: 1,
                                            width: { xs: 40, md: 56 },
                                            height: { xs: 40, md: 56 },
                                            fontSize: { xs: 10, md: 14 },
                                        }}
                                    >
                                        FRI
                                    </IconButton>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            marginX: { xs: 2, md: 0 },
                                        }}
                                    >
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                        <IconButton>
                                            <HorizontalRule
                                                sx={{
                                                    fontSize: {
                                                        xs: 14,
                                                        md: 24,
                                                    },
                                                    fontWeight: {
                                                        xs: 500,
                                                        md: 600,
                                                    },
                                                }}
                                            />
                                        </IconButton>
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={2}>
                                <Box
                                    sx={{
                                        width: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            border: 1,
                                            width: { xs: 40, md: 56 },
                                            height: { xs: 40, md: 56 },
                                            fontSize: { xs: 10, md: 14 },
                                        }}
                                    >
                                        SAT
                                    </IconButton>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            marginX: { xs: 2, md: 0 },
                                        }}
                                    >
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                        <IconButton>
                                            <HorizontalRule
                                                sx={{
                                                    fontSize: {
                                                        xs: 14,
                                                        md: 24,
                                                    },
                                                    fontWeight: {
                                                        xs: 500,
                                                        md: 600,
                                                    },
                                                }}
                                            />
                                        </IconButton>
                                        <TextField
                                            type="time"
                                            size={isMed ? '' : 'small'}
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        marginTop: 3,
                    }}
                >
                    <Button variant="contained" color="error">
                        Simpan
                    </Button>
                </Box>
            </Box>
        </Doctor>
    )
}

export default PracticeDoctor

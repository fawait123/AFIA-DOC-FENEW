import { InsertChart, MoreHoriz } from '@mui/icons-material'
import { Box, Card, IconButton, Typography } from '@mui/material'
import Chart from 'react-apexcharts'
import chartData from '../chart-data/data-line-chart'

const TotalPatient = () => {
    return (
        <Card
            sx={{
                width: 1,
                height: 180,
                bgcolor: '#039be5',
                borderRadius: 3,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: 210,
                    width: 210,
                    bgcolor: '#81d4fa',
                    borderRadius: 100,
                    top: -135,
                    right: -80,
                    opacity: 0.2,
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    height: 210,
                    width: 210,
                    bgcolor: '#4fc3f7',
                    borderRadius: 100,
                    top: -320,
                    right: -160,
                    opacity: 0.7,
                }}
            />
            <Box sx={{ position: 'relative', top: -400, paddingX: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                            <InsertChart sx={{ color: '#fff' }} />
                        </IconButton>
                        <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                            Total Pasien
                        </Typography>
                    </Box>
                    <IconButton>
                        <MoreHoriz sx={{ color: '#fff' }} />
                    </IconButton>
                </Box>
                <Box sx={{ marginTop: 0.3, paddingX: 1 }}>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: 40,
                                fontWeight: 600,
                                color: '#fff',
                            }}
                        >
                            324
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 24,
                                color: '#fff',
                                marginLeft: 0.2,
                            }}
                        >
                            Pasien
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: 140,
                    position: 'relative',
                    top: -500,
                    right: -128,
                }}
            >
                <Chart {...chartData} />
            </Box>
        </Card>
    )
}

export default TotalPatient

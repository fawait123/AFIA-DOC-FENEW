import { Box, Button, Typography } from '@mui/material'
import Admin from '..'
import { Add } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import TableDataGrid from 'components/table/TableDataGrid'
import { useEffect, useState } from 'react'
import DoctorAction from './DoctorAction'
import httpRequest from 'utils/httpRequest'

const DoctorAdmin = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            // const response = await fetch(
            //     'http://127.0.0.1:8000/api/dokter/data'
            // )
            // const jsonData = await response.json()
            // if (jsonData.status === true) {
            //     const formattedData = jsonData.data.map((item, index) => ({
            //         ...item,
            //         no: index + 1,
            //     }))
            //     setData(formattedData)
            // } else {
            //     console.log('Error:', jsonData.error)
            // }
            await httpRequest({
                url: 'admin/doctor',
                method: 'get',
                params: {
                    page: 0,
                    limit: 10,
                },
            }).then((response) => {
                let datas = response?.data?.results.data?.rows
                datas = datas.map((item, index) => {
                    return {
                        ...item,
                        no: ++index,
                    }
                })

                setData(datas)
            })
        } catch (error) {
            console.log('Error:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const columns = [
        {
            field: 'no',
            headerName: 'No',
            width: 70,
        },
        {
            field: 'name',
            headerName: 'Nama',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'phone',
            headerName: 'Telp',
            flex: 1,
        },
        {
            field: 'actions',
            headerName: '',
            type: 'actions',
            width: 150,
            renderCell: (params) => (
                <DoctorAction id={params.id} onSuccess={fetchData} />
            ),
        },
    ]

    return (
        <Admin>
            <Box
                sx={{
                    bgcolor: '#ffffff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 2,
                    padding: 2,
                    marginBottom: 2,
                }}
            >
                <Typography
                    variant={{ xs: 'h7', md: 'h6' }}
                    sx={{ fontWeight: { xs: 500, md: 600 } }}
                >
                    Data Doctor
                </Typography>
                <Link
                    to="/admin/dokter/tambah"
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        variant="contained"
                        color="error"
                        elevation={0}
                        sx={{ display: 'flex' }}
                    >
                        <Add
                            sx={{
                                fontSize: { xs: 12, md: 20 },
                                color: '#ffffff',
                            }}
                        />
                        <Typography
                            color="#ffffff"
                            marginLeft={1}
                            sx={{ fontSize: { xs: 10, md: 16 } }}
                        >
                            Tambah
                        </Typography>
                    </Button>
                </Link>
            </Box>
            <TableDataGrid data={data} columns={columns} />
        </Admin>
    )
}

export default DoctorAdmin

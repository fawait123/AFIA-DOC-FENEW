import { Box, Button, Typography } from '@mui/material'
import Admin from '..'
import { Add } from '@mui/icons-material'
import AddModal from './Modal/AddModal'
import { useEffect, useState } from 'react'
import SpecialistAction from './SpecialistAction'
import TableDataGrid from 'components/table/TableDataGrid'
import httpRequest from 'utils/httpRequest'

const SpecialistAdmin = () => {
    const [add, setAdd] = useState(false)
    const [data, setData] = useState([])

    const handleModalAdd = () => setAdd(!add)

    const fetchData = async () => {
        try {
            // const response = await fetch(
            //     'http://127.0.0.1:8000/api/spesialis/data'
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
                url: 'admin/specialist',
                method: 'get',
                params: {
                    page: 0,
                    limit: 10,
                },
            }).then((response) => {
                let datas = response.data.results.data.rows
                datas = datas.map((item, index) => {
                    return {
                        ...item,
                        no: index + 1,
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
            headerName: 'Nama Spesialis',
            flex: 1,
        },
        {
            field: 'actions',
            headerName: '',
            type: 'actions',
            width: 150,
            renderCell: (params) => (
                <SpecialistAction id={params.id} onSuccess={fetchData} />
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
                    Data Specialist
                </Typography>
                <Button
                    onClick={handleModalAdd}
                    variant="contained"
                    color="error"
                    elevation={0}
                    sx={{ display: 'flex' }}
                >
                    <Add
                        sx={{ fontSize: { xs: 16, md: 20 }, color: '#ffffff' }}
                    />
                    <Typography
                        color="#ffffff"
                        marginLeft={1}
                        sx={{ fontSize: { xs: 10, md: 16 } }}
                    >
                        Tambah
                    </Typography>
                </Button>
            </Box>
            <TableDataGrid data={data} columns={columns} />
            <AddModal open={add} modalToggle={handleModalAdd} />
        </Admin>
    )
}

export default SpecialistAdmin

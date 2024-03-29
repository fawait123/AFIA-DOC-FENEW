import { Box, Button, Typography } from '@mui/material'
import Admin from '..'
import { Add } from '@mui/icons-material'
import AddModal from './Modal/AddModal'
import React, { useEffect, useState } from 'react'
import UserAction from './UserAction'
import TableDataGrid from 'components/table/TableDataGrid'
import httpRequest from 'utils/httpRequest'

const UserAdmin = () => {
    const [add, setAdd] = useState(false)
    const [data, setData] = useState([])
    const [pagination, setPagination] = React.useState({
        pageSize: 10,
        page: 0,
    })
    const [loading, setLoading] = useState(false)

    const handleModalAdd = () => setAdd(!add)

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://127.0.0.1:8000/api/user/data')
    //         const jsonData = await response.json()
    //         if (jsonData.status === true) {
    //             const formattedData = jsonData.data.map((item, index) => ({
    //                 ...item,
    //                 no: index + 1,
    //             }))
    //             setData(formattedData)
    //         } else {
    //             console.log('Error:', jsonData.error)
    //         }
    //     } catch (error) {
    //         console.log('Error:', error)
    //     }
    // }

    const getData = async () => {
        setLoading(true)
        httpRequest({
            url: 'admin/user',
            method: 'get',
            params: {
                page: 0,
                limit: 10,
            },
        })
            .then((response) => {
                let datas = response.data.results.data.rows
                datas = datas.map((item, index) => {
                    index = index + 1
                    return {
                        ...item,
                        roleName: item?.role?.display_name || 'Tidak diset',
                        no: index,
                    }
                })
                setData(datas)
                setLoading(false)
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    useEffect(() => {
        // fetchData()
        getData()
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
            field: 'username',
            headerName: 'Username',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'roleName',
            headerName: 'Role',
            flex: 1,
        },
        {
            field: 'actions',
            headerName: '',
            type: 'actions',
            width: 150,
            renderCell: (params) => (
                <UserAction id={params.id} onSuccess={getData} />
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
                    Data User
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
            <TableDataGrid
                data={data}
                columns={columns}
                pagination={pagination}
                loading={loading}
                setPagination={setPagination}
            />
            <AddModal
                open={add}
                modalToggle={handleModalAdd}
                onSuccess={getData}
            />
        </Admin>
    )
}

export default UserAdmin

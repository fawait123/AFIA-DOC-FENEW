import { Box, Button, Typography } from '@mui/material'
import Admin from '..'
import { Add } from '@mui/icons-material'
import { Link } from 'react-router-dom'
// import TableDataGrid from 'components/table/TableDataGrid'
import { Table, Card, Tag } from 'antd'
import { useEffect, useState } from 'react'
import DoctorAction from './DoctorAction'
import httpRequest from 'utils/httpRequest'

const DoctorAdmin = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

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
            setLoading(true)
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
                        id: ++index,
                    }
                })

                setData(datas)
                setLoading(false)
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
            dataIndex: 'NIK',
            title: 'NIK',
            key: 'NIK',
            fixed: 'left',
        },
        {
            dataIndex: 'name',
            title: 'Nama',
            key: 'name',
            fixed: 'left',
            render: (text, record) => {
                return (
                    <>
                        {record.name +
                            ', ' +
                            record.initialDegree +
                            '., ' +
                            record.finalDegree}
                    </>
                )
            },
        },
        {
            dataIndex: 'birthdate',
            title: 'Birthdate',
            key: 'birthdate',
            render: (text, record) => {
                return <>{record.placebirth + ' ' + record.birtdate}</>
            },
        },
        {
            dataIndex: 'gender',
            title: 'Gender',
            key: 'gender',
            render: (text, record) => {
                return (
                    <Tag color={record.gender == 'L' ? 'cyan' : 'red'}>
                        {record.gender == 'L' ? 'Laki Laki' : 'Perempuan'}
                    </Tag>
                )
            },
        },
        {
            dataIndex: 'email',
            title: 'Email',
            key: 'email',
        },
        {
            dataIndex: 'phone',
            title: 'Telp',
            key: 'phone',
        },
        {
            dataIndex: 'religion',
            title: 'Religion',
            key: 'religion',
        },
        {
            dataIndex: 'address',
            title: 'Address',
            key: 'address',
            width: '30%',
            render: (text, record) => {
                return (
                    <p>
                        {record.addresses[0].province.name +
                            ', ' +
                            record.addresses[0].district.name +
                            ', ' +
                            record.addresses[0].subdistrict.name +
                            ', ' +
                            record.addresses[0].village.name +
                            ', ' +
                            record.addresses[0].rtrw}
                    </p>
                )
            },
        },
        {
            dataIndex: 'actions',
            title: 'Actions',
            fixed: 'right',
            render: (text, record) => (
                <DoctorAction id={record.id} onSuccess={fetchData} />
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
            {/* <TableDataGrid data={data} columns={columns} /> */}
            <Card size="default">
                <Table
                    columns={columns}
                    dataSource={data}
                    loading={loading}
                    scroll={{
                        x: 1300,
                    }}
                />
            </Card>
        </Admin>
    )
}

export default DoctorAdmin

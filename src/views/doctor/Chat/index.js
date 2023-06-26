import {
    Avatar,
    Box,
    Divider,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Toolbar,
    Typography,
} from '@mui/material'
import Doctor from '..'
import { Element } from 'react-scroll'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { AttachFile, Send } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'

const ChatForDoctor = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const toolbarRef = useRef(null)
    const paperRef = useRef(null)
    const [sizeBx, setSizeBx] = useState(null)
    useEffect(() => {
        const toolbarHeight = toolbarRef.current.clientHeight
        const paperHeight = paperRef.current.clientHeight

        // You can store the heights in a variable or use them as needed
        const combinedHeight = toolbarHeight + paperHeight

        // Example: console.log the heights
        setSizeBx(combinedHeight)
    }, [])
    return (
        <Doctor>
            <Grid
                container
                columns={12}
                sx={{
                    width: 1,
                    height: '82vh',
                    bgcolor: '#fff',
                    borderRadius: 1,
                    marginY: { xs: 6, md: 2 },
                }}
            >
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            wiidth: 1,
                            height: 1,
                            borderRight: '1px #e0e0e0 solid',
                        }}
                    >
                        <Toolbar sx={{ borderBottom: '1px #e0e0e0 solid' }}>
                            <Typography
                                sx={{
                                    fontSize: 22,
                                    fontWeight: 600,
                                    color: 'blue',
                                }}
                            >
                                Messages
                            </Typography>
                        </Toolbar>
                        <Box sx={{ height: 460, overflow: 'auto' }}>
                            <PerfectScrollbar>
                                <Element
                                    name="scrollBox"
                                    className="scroll-box"
                                >
                                    {array.map((item) => (
                                        <Box
                                            key={item}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: 2,
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <Avatar
                                                src="/static/images/avatar/1.jpg"
                                                alt="Remy"
                                            />
                                            <Box sx={{ marginX: 1 }}>
                                                <Typography
                                                    sx={{ fontWeight: 600 }}
                                                >
                                                    Nama
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: 12,
                                                        color: '#616161',
                                                    }}
                                                >
                                                    Lorem ipsum dolor sit
                                                    amet...
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Element>
                            </PerfectScrollbar>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={0} md={8} display={{ xs: 'none', md: 'block' }}>
                    <Box sx={{ width: 1, height: 1, position: 'relative' }}>
                        <Toolbar
                            ref={toolbarRef}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                borderBottom: '1px #e0e0e0 solid',
                            }}
                        >
                            <Avatar
                                src="/static/images/avatar/1.jpg"
                                alt="Remy"
                            />
                            <Box sx={{ marginX: 2 }}>
                                <Typography sx={{ fontWeight: 600 }}>
                                    Nama
                                </Typography>
                            </Box>
                        </Toolbar>
                        <Box
                            sx={{
                                width: 1,
                                height: `calc(82vh - ${sizeBx}px)`,
                                overflow: 'auto',
                                paddingX: 1,
                                paddingY: 0.5,
                            }}
                        >
                            <PerfectScrollbar>
                                <Element
                                    name="scrollBox"
                                    className="scroll-box"
                                >
                                    <Box
                                        sx={{
                                            width: 1,
                                            display: 'flex',
                                            justifyContent: 'start',
                                            marginY: 1.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 'fit-content',
                                                maxWidth: 500,
                                                borderRadius:
                                                    '15px 15px 15px 0px',
                                                bgcolor: '#e0e0e0',
                                                paddingX: 2,
                                                paddingY: 1,
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Deleniti beatae at ea illo pariatur?
                                            Consequatur?
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: 1,
                                            display: 'flex',
                                            justifyContent: 'end',
                                            marginY: 1.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 'fit-content',
                                                maxWidth: 500,
                                                borderRadius:
                                                    '15px 15px 0px 15px',
                                                bgcolor: '#ff8a80',
                                                paddingX: 2,
                                                paddingY: 1,
                                            }}
                                        >
                                            sadugasigdsadas
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: 1,
                                            display: 'flex',
                                            justifyContent: 'start',
                                            marginY: 1.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 'fit-content',
                                                maxWidth: 500,
                                                borderRadius:
                                                    '15px 15px 15px 0px',
                                                bgcolor: '#e0e0e0',
                                                paddingX: 2,
                                                paddingY: 1,
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Deleniti beatae at ea illo pariatur?
                                            Consequatur?
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: 1,
                                            display: 'flex',
                                            justifyContent: 'end',
                                            marginY: 1.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 'fit-content',
                                                maxWidth: 500,
                                                borderRadius:
                                                    '15px 15px 0px 15px',
                                                bgcolor: '#ff8a80',
                                                paddingX: 2,
                                                paddingY: 1,
                                            }}
                                        >
                                            sadugasigdsadas
                                        </Box>
                                    </Box>
                                </Element>
                            </PerfectScrollbar>
                        </Box>
                        <Box
                            ref={paperRef}
                            sx={{
                                width: 1,
                                height: 56,
                                display: 'flex',
                                bgcolor: '#f5f5f5',
                                position: 'absolute',
                                bottom: 0,
                            }}
                        >
                            <Paper
                                component="form"
                                sx={{
                                    p: '2px 4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: 1,
                                    borderTop: '1px #e0e0e0 solid',
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Write text here..."
                                    inputProps={{
                                        'aria-label': 'write text here',
                                    }}
                                />
                                <IconButton
                                    type="button"
                                    sx={{ p: '10px' }}
                                    aria-label="file"
                                >
                                    <AttachFile />
                                </IconButton>
                                <Divider
                                    sx={{ height: 28, m: 0.5 }}
                                    orientation="vertical"
                                />
                                <IconButton
                                    color="primary"
                                    sx={{ p: '10px' }}
                                    aria-label="send"
                                >
                                    <Send />
                                </IconButton>
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Doctor>
    )
}

export default ChatForDoctor

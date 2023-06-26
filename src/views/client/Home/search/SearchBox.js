import PropTypes from 'prop-types'
import { Search } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'

const SearchBox = ({ width, size, marginTop, placeholder }) => {
    return (
        <Box sx={{ display: 'flex', width: width, marginTop: marginTop }}>
            <TextField
                sx={{ bgcolor: '#FFFFFF' }}
                size={size}
                fullWidth
                placeholder={placeholder}
            />
            <Button
                variant="contained"
                sx={{ marginLeft: '-4px', marginTop: '-2px', paddingX: 4 }}
            >
                {size ? (
                    <>
                        <Search
                            sx={{
                                fontSize: { xs: 16, md: 28 },
                                color: '#FFFFFF',
                            }}
                        />
                        <Typography
                            sx={{
                                marginLeft: 1,
                                color: '#FFFFFF',
                                fontSize: { xs: 12, md: 16 },
                                fontWeight: { xs: 400, md: 600 },
                            }}
                        >
                            Cari
                        </Typography>
                    </>
                ) : (
                    <>
                        <Search
                            sx={{
                                fontSize: { xs: 20, md: 40 },
                                color: '#FFFFFF',
                            }}
                        />
                        <Typography
                            sx={{
                                marginLeft: 1,
                                color: '#FFFFFF',
                                fontSize: { xs: 12, md: 16 },
                                fontWeight: { xs: 400, md: 600 },
                            }}
                        >
                            Cari
                        </Typography>
                    </>
                )}
            </Button>
        </Box>
    )
}

SearchBox.propTypes = {
    width: PropTypes.number,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    marginTop: PropTypes.number,
}

export default SearchBox

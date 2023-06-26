import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Admin from 'views/admin'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

const dropzoneStyles = {
    width: '100%',
    height: '135px',
    border: '2px dashed #bbb',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#9e9e9e',
}

const previewImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}

const AddDoctor = () => {
    const [name, setName] = useState('')

    const [initDeg, setInitDeg] = useState('')

    const [finalDeg, setFinalDeg] = useState('')

    const [gender, setGender] = useState('')

    const [religion, setReligion] = useState('')

    const [email, setEmail] = useState('')

    const [telp, setTelp] = useState('')

    const [place, setPlace] = useState('')

    const [birthday, setBirthday] = useState('')

    const [nik, setNik] = useState('')

    const [nip, setNIP] = useState('')

    const [prov, setProv] = useState('')

    const [kab, setKab] = useState('')

    const [kec, setKec] = useState('')

    const [desa, setDesa] = useState('')

    const [rt, setRt] = useState('')

    const [rw, setRw] = useState('')

    const [detail, setDetail] = useState('')

    const [selectedImage, setSelectedImage] = useState(null)

    const [previewImage, setPreviewImage] = useState('')

    const onDrop = (acceptedFiles) => {
        setSelectedImage(acceptedFiles[0])
        setPreviewImage(URL.createObjectURL(acceptedFiles[0]))
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    console.log(selectedImage)

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Handle the form submission, including the selected image
        const doctorData = {
            name: name,
            initial_deg: initDeg,
            final_deg: finalDeg,
            gender: gender,
            religion: religion,
            email: email,
            phone: telp,
            tempat_lahir: place,
            tgl_lahir: birthday,
            provinsi: prov,
            kab: kab,
            kec: kec,
            desa: desa,
            rt: rt,
            rw: rw,
            nik: nik,
            nip: nip,
            detail_alamat: detail,
        }

        try {
            const response = await fetch(
                'http://127.0.0.1:8000/api/dokter/store',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(doctorData),
                }
            )

            const data = await response.json()

            // console.log(data)
            if (data.status == true) {
                alert('data berhasil masuk')
                window.location.href = '/admin/dokter'
            }
        } catch (error) {
            console.log('faied', error)
        }

        console.log(selectedImage)
    }

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
                    Add new doctor
                </Typography>
            </Box>
            <Box
                sx={{
                    width: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#ffffff',
                    paddingX: 2,
                    paddingY: 4,
                }}
            >
                <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                    <Grid
                        container
                        columns={{ xs: 1, md: 2 }}
                        spacing={1}
                        sx={{ width: 1 }}
                        rowSpacing={2}
                    >
                        <Grid item xs={1}>
                            <Grid
                                container
                                sx={{ width: 1 }}
                                columns={{ xs: 1, md: 2 }}
                                spacing={1}
                                rowSpacing={3}
                            >
                                <Grid item xs={1}>
                                    <TextField
                                        label="Nama"
                                        placeholder="Nama Dokter"
                                        fullWidth
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <Grid container columns={2} spacing={1}>
                                        <Grid item xs={1}>
                                            <TextField
                                                label="Initial Deg"
                                                placeholder="S.Ked"
                                                fullWidth
                                                onChange={(e) =>
                                                    setInitDeg(e.target.value)
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={1}>
                                            <TextField
                                                label="Final Deg"
                                                placeholder="Sp.KK"
                                                fullWidth
                                                onChange={(e) =>
                                                    setFinalDeg(e.target.value)
                                                }
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2}>
                                    <Grid container columns={2} spacing={1}>
                                        <Grid item xs={1}>
                                            <FormControl sx={{ width: 1 }}>
                                                <InputLabel id="gender-label">
                                                    Jenis Kelamin
                                                </InputLabel>
                                                <Select
                                                    labelId="gender-label"
                                                    id="gender-select"
                                                    label="Jenis Kelamin"
                                                    onChange={(e) =>
                                                        setGender(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <MenuItem value="laki-laki">
                                                        Laki-laki
                                                    </MenuItem>
                                                    <MenuItem value="perempuan">
                                                        Perempuan
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <FormControl sx={{ width: 1 }}>
                                                <InputLabel id="religion-label">
                                                    Agama
                                                </InputLabel>
                                                <Select
                                                    labelId="religion-label"
                                                    id="religion-select"
                                                    label="Agama"
                                                    onChange={(e) =>
                                                        setReligion(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <MenuItem value="islam">
                                                        Islam
                                                    </MenuItem>
                                                    <MenuItem value="Kristen">
                                                        Kristen
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={1}>
                                    <TextField
                                        label="Email"
                                        placeholder="Email"
                                        fullWidth
                                        type="email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <TextField
                                        label="Telepon"
                                        placeholder="Telepon"
                                        fullWidth
                                        onChange={(e) =>
                                            setTelp(e.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <TextField
                                        label="Tempat Lahir"
                                        placeholder="Tempat Lahir"
                                        fullWidth
                                        onChange={(e) =>
                                            setPlace(e.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DatePicker
                                            label="Tanggal Lahir"
                                            slotProps={{
                                                textField: { fullWidth: true },
                                            }}
                                            onChange={(date) =>
                                                setBirthday(date)
                                            }
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        label="NIK"
                                        placeholder="NIK"
                                        fullWidth
                                        onChange={(e) => setNik(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        label="NIP"
                                        placeholder="NIP"
                                        fullWidth
                                        onChange={(e) => setNIP(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <Grid
                                container
                                columns={2}
                                spacing={1}
                                rowSpacing={3}
                            >
                                <Grid item xs={2} md={1}>
                                    <FormControl sx={{ width: 1 }}>
                                        <InputLabel id="provinsi-label">
                                            Provinsi
                                        </InputLabel>
                                        <Select
                                            labelId="provinsi-label"
                                            id="provinsi-select"
                                            label="Provinsi"
                                            onChange={(e) =>
                                                setProv(e.target.value)
                                            }
                                        >
                                            <MenuItem value="">None</MenuItem>
                                            <MenuItem value="Jawa">
                                                Jawa
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2} md={1}>
                                    <FormControl sx={{ width: 1 }}>
                                        <InputLabel id="kabupaten-label">
                                            Kabupaten/Kota
                                        </InputLabel>
                                        <Select
                                            labelId="kabupaten-label"
                                            id="kabupaten-select"
                                            label="Kabupaten/Kota"
                                            onChange={(e) =>
                                                setKab(e.target.value)
                                            }
                                        >
                                            <MenuItem value="">None</MenuItem>
                                            <MenuItem value="Hijau">
                                                Hijau
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2} md={1}>
                                    <FormControl sx={{ width: 1 }}>
                                        <InputLabel id="kecamatan-label">
                                            Kecamatan
                                        </InputLabel>
                                        <Select
                                            labelId="kecamatan-label"
                                            id="kecamatan-select"
                                            label="Kecamatan"
                                            onChange={(e) =>
                                                setKec(e.target.value)
                                            }
                                        >
                                            <MenuItem value="">None</MenuItem>
                                            <MenuItem value="Spageti">
                                                Spageti
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2} md={1}>
                                    <FormControl sx={{ width: 1 }}>
                                        <InputLabel id="desa-label">
                                            Desa
                                        </InputLabel>
                                        <Select
                                            labelId="desa-label"
                                            id="desa-select"
                                            label="Desa"
                                            onChange={(e) =>
                                                setDesa(e.target.value)
                                            }
                                        >
                                            <MenuItem value="">None</MenuItem>
                                            <MenuItem value="Desa">
                                                Desa
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={1}>
                                    <TextField
                                        label="RT"
                                        placeholder="RT"
                                        fullWidth
                                        onChange={(e) => setRt(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <TextField
                                        label="RW"
                                        placeholder="RW"
                                        fullWidth
                                        onChange={(e) => setRw(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        label="Detail Alamat"
                                        placeholder="Detail Alamat"
                                        fullWidth
                                        onChange={(e) =>
                                            setDetail(e.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    {/* dropzone goes here */}
                                    {/* i wanna make the dropzone be 2 row span */}
                                    <div
                                        {...getRootProps()}
                                        style={dropzoneStyles}
                                    >
                                        <input {...getInputProps()} />
                                        {previewImage ? (
                                            <img
                                                src={previewImage}
                                                alt="Preview"
                                                style={previewImageStyles}
                                            />
                                        ) : isDragActive ? (
                                            <Typography variant="body1">
                                                Drop the image here...
                                            </Typography>
                                        ) : (
                                            <Typography variant="body1">
                                                Drag and drop an image here, or
                                                click to select an image
                                            </Typography>
                                        )}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                type="submit"
                                color="error"
                                sx={{ width: 1, padding: 1 }}
                            >
                                <Typography
                                    sx={{ color: '#ffffff', fontWeight: 600 }}
                                >
                                    SAVE
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Admin>
    )
}

export default AddDoctor

import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Routes from './routes'

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Routes />
        </StyledEngineProvider>
    )
}

export default App

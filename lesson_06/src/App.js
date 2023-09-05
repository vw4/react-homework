import {List} from './pages';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <List items={[
                {id: 1, completed: true, value: 'List item 1'},
                {id: 2, completed: false, value: 'List item 2'},
                {id: 3, completed: false, value: 'List item 3'},
                {id: 4, completed: false, value: 'List item 4'},
            ]}/>
        </ThemeProvider>
    )
}

export default App;
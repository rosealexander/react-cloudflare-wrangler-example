import Page from "./features/Page";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import lightTheme from "./features/theme/theme";
import {createContext, useState} from "react";

export const ThemeContext = createContext([]);

function App() {
    const [theme, setTheme] = useState(lightTheme)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ThemeContext.Provider value={[theme, setTheme]}>
                <Page/>
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export default App;

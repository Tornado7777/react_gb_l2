import { createContext, useCallback, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

// создаем конеткст
const defualtValue = "Theme context access denied"
export const ThemeContext = createContext(defualtValue);

const themes = {
    dark: {
        color: "#000",
    },
    light: {
        color: "#fff",
    },
}

const themeMUI = {
    dark: createTheme({
        palette:{
            primary:{
                main: '#ffff'
            },
        },

    }),
    light: createTheme({
        palette:{
            primary:{
                main: '#ff0000'
            },
        },
    }),
};

export const CustomThemeProvider = ({ children, initialTheme = "light" }) => {
    const [theme, setTheme] = useState({
        theme: themes[initialTheme],
        name: initialTheme,
    });

    const themeSetter = useCallback((name) => {
        if (themes[name]) {
            setTheme({
                name,
                theme: themes[name],
            })
        }
    }, []);



    return (
        <ThemeContext.Provider value={{ theme, themeSetter }}>
            <ThemeProvider theme={themeMUI[theme.name]}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
};

/*
const ctx= createContext("ctx access denied");
//наполнение контекста
<ctx.Provider value={{id: 1}} />

//подписаться к контексту через  ctx.Consumer

<ctx.Consumer>
    {(ctx) => { 
        console.log(ctx); //id: 1
    }}
</ctx.Consumer>;

//подписаться к контексту через  хук  useContext
const data = useContext(ctx);
*/
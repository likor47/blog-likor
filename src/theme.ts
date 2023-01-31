import {createTheme} from "@mui/material";

export const darkMode = createTheme(
    {palette: {
                primary: {
                    main: '#ff9500'
                },
                background: {
                    paper: '#0E1111',
                },
            },
            components: {
                MuiPagination: {
                    styleOverrides: {
                        root: {
                            '.MuiPaginationItem-previousNext': {
                                svg: {
                                    path: {
                                        fill: 'white'
                                    },
                                }
                            },
                            '.MuiPaginationItem-page' : {
                                color: 'white'
                            }
                        },
                    },
                }
            }
        }
);
export const lightMode = createTheme(
    {palette: {
            primary: {
                main: '#ff9500'
            },

        },
        components: {
            MuiPagination: {
                styleOverrides: {
                    root: {
                        '.MuiPaginationItem-previousNext': {
                            svg: {
                                path: {
                                    fill: 'black'
                                },
                            }
                        },
                        '.MuiPaginationItem-page' : {
                            color: 'black'
                        }
                    },
                },
            }
        }
    }
);
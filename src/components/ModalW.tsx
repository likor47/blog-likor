import React, {FC} from 'react';
import {Box, Modal, ThemeProvider, Typography} from "@mui/material";
import {useGlobalState} from "../state";
import {darkMode, lightMode} from "../theme";

interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

const ModalW: FC<ModalProps> = ({ children, title, onClose }) => {

    const [darkTheme] = useGlobalState('darkTheme')

    const mode = localStorage.getItem('theme')

    return (
        <ThemeProvider theme={mode === 'true' ? darkMode : lightMode}>
            <div onClick={onClose}>
                <Modal
                    className="modal"
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    open
                >
                    <Box
                        onClick={e => e.stopPropagation()}
                        sx={
                        {
                            color: mode === 'true' ? 'white' : 'black',
                            bgcolor: mode === 'true' ? 'background.paper' : 'white',
                            boxShadow: 1,
                            borderRadius: 2,
                            p: 2,
                        }
                    }>
                        <Typography style={{margin: "auto", textAlign: "center" }} id="modal-modal-title" variant="h6" component="h2">
                            { title }
                        </Typography>
                        {children}

                    </Box>
                </Modal>
            </div>
        </ThemeProvider>
    );
};

export default ModalW;
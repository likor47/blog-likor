import React, {createContext, useState} from 'react'

interface IModalContext {
    modal: boolean
    open: () => void
    close: () => void
    modal1: boolean
    open1: () => void
    close1: () => void
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: () => {},
    close: () => {},
    modal1: false,
    open1: () => {},
    close1: () => {}
})

export const ModalState = ({ children }: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)

    const open = () => setModal(true)
    const open1 = () => setModal1(true)

    const close = () => setModal(false)
    const close1 = () => setModal1(false)

    return (
        <ModalContext.Provider value={{ modal, open, close, modal1, open1, close1 }}>
            { children }
        </ModalContext.Provider>
    )
}
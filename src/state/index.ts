import { createGlobalState } from 'react-hooks-global-state'

const {setGlobalState, useGlobalState} = createGlobalState({
    darkTheme: false,
    showWeather: false
})

export {useGlobalState, setGlobalState}
import {useContext} from 'react'
import {ThemeContext} from './App'

function Paragraph() {
    const theme = useContext(ThemeContext);

    console.log(theme);
    
    return (
        <p className={theme}>
            Context provides a way to pass data through the component tree without having to pass props down manually at every level.
        </p>
    )
}

export default Paragraph
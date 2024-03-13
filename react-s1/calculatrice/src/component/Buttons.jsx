import NumberButton from "./NumberButton.jsx"
import CalcButton from './CalcButton.jsx'
const Buttons = () => {

    return (
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <NumberButton />
            <CalcButton />
        </div>
    )
}

export default Buttons;
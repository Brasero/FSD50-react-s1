import './numberButton.css';

const NumberButton = () => {

    const numbers = [0,1,2,3,4,5,6,7,8,9];
    numbers.reverse();

    return (
        <div className={"numberGrid"}>
            {
                numbers.map((val, key) => {
                    return <button key={key} >{val}</button>
                })
            }
        </div>
    )
}
export default NumberButton
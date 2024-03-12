import Counter from './component/Counter.jsx';

function App() {

    return (
        <>
            <Counter/>
            <Counter step={2}/>
            <Counter binary={true} />
                <Counter cyclique={true} />
                <Counter cyclique={true} step={3} />
            </>
            )
            }

export default App
function App() {
    const dudes = ['Kenneth', 'Woody', 'Julius', 'Godofredo']

    return (
        <>
            <h1>Handsome Dudes</h1>
            <ul>
                {dudes.map((dude, index) => (
                    <li key={index}>{dude}</li>
                ))}
            </ul>
        </>
    )
}

export default App

export default HelloWorld

function HelloWorld(props) {
    const {text} = props
    return (
        <div>
            <h1>Hello {text}</h1>
        </div>
    )
}
export default function TodoList({text, completed}) {
    // jika tidak ingin mengembalikan component, namanya adalah null component
    if(!text) {
        return null
    }

    return (
        // logical AND jsx
        <li>{text} {completed && '✅'}</li>
    )
}
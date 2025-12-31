# Conditional Rendering
Conditional Rendering adalah cara menampilkan komponen berdasarkan kondisi tertentu di React.

## Hal yang perlu diketahui
- Menggunakan JavaScript conditional (if, else if, else)
- Menggunakan Ternary Operator (? :)
- Menggunakan Logical AND (&&)
- Component bisa mengembalikan null untuk tidak merender apa-apa
- Membuat komponen dinamis berdasarkan state atau props

## Conditional dengan if statement
Contoh penggunaan if statement untuk mengecek kondisi:
```javascript
export default function TodoList({text, completed}) {
    // jika tidak ingin mengembalikan component, namanya adalah null component
    if(!text) {
        return null
    }

    return (
        <li>{text} {completed && '✅'}</li>
    )
}
```

## Ternary Operator
Ternary operator adalah cara ringkas untuk menulis if-else dalam satu baris:
```javascript
{completed ? '✅' : '❌'}
```
Format: `condition ? valueIfTrue : valueIfFalse`

## Logical AND (&&)
Logical AND digunakan untuk merender elemen hanya jika kondisi bernilai true:
```javascript
{isLoggedIn && <LogoutButton />}
```
Jika `isLoggedIn` bernilai true, maka `<LogoutButton />` akan dirender.

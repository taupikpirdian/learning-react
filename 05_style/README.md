
# Style Component
Style Component adalah cara membuat komponen dengan style css.

## Hal yang perlu diketahui
- Buat file css untuk menampung code css
- Import file css di dalam komponen jika ingin menggunakan style css
- Pemanggilan class menggunakan props className

Contoh:
```javascript
import './style.css'

function HelloWorld() {
    return (
        <div>
            <h1 className="title">Hello World</h1>
        </div>
    )
}
```
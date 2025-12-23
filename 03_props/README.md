
# Props
Props (properties) adalah cara mengirim data dari parent component ke child component di React.

## Hal yang perlu diketahui
- Mengirim data (text, angka, object, function)
- Membuat komponen reusable
- Read-only (tidak boleh diubah oleh child)
- Untuk menambahkan Props pada Component, kita hanya perlu menambahkan parameter object pada func di Component.
- Contoh:
    ```javascript
    function HelloWorld(props) {
        return (
            <div>
                .....
            </div>
        )
    }
    ```
## Mengirim Props
- Contoh:
    ```javascript
    <HelloWorld text="React" />
    ```

## Destructuring Props
Destructuring Props adalah cara mengambil nilai dari object props dan mengassign ke variable.
- Contoh:
    ```javascript
    function HelloWorld(props) {
        const {text} = props
        return (
            <div>
                <h1>Hello {text}</h1>
            </div>
        )
    }
    ```

# Hello World
Kita akan coba buat component hello world yang nantinya akan di tampilkan di browser.

## Hal yang perlu diketahui
- Extention file jika menggunakan javascript adalah .jsx, lalu .tsx jika menggunakan TypeScript
- Penamaan Component menggunakan CamelCase
- Return Component berupa element UI
- Component hanya bisa mengembalikan satu element saja, misal
    ```javascript
    function HelloWorld() {
        return (
            <div>
                .....
            </div>
        )
    }
    ```
- Yang ada di antara div itu adalah XML, bukan HTML, jadi perlu penutup di akhir code.
- Pembuatan Component di folder src
    ```bash
    ├── example-directory/
    │   ├── dist/
    │   ├── node_modules/
    │   ├── public/
    │   ├── src/
    │   │   ├── hello-world/
    │   │   │   └── HelloWorld.jsx
    ```
## Membuat Component Pertama
referensi: https://react.dev/reference/react-dom/components
Buat file HelloWorld.jsx di folder src:
```bash
├── example-directory/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── hello-world/
│   │   │   └── HelloWorld.jsx
```
Isinya seperti ini:
```javascript
export default HelloWorld

function HelloWorld() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
```

Lalu bagaimana cara menampilkan Component tersebut di halaman browser kita?
- Di dalam folder component kita membutuhkan sebuah instance dari React Root
- Untuk membuat React Root bisa menggunakan method createRoot(element)

## Oke, kita lanjut membuat instance yaa ..
- buat di folder Component namanya main.jsx
```bash
├── example-directory/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── hello-world/
│   │   │   └── HelloWorld.jsx
│   │   │   └── main.jsx
```
- isinya seperti ini:
```javascript
import {createRoot} from "react-dom/client";
import HelloWorld from './HelloWorld.jsx'

createRoot(document.getElementById("root"))
    .render(
    <HelloWorld />
);
```
## Proses Menampilkan Component
- Menampilkan component react menggunakan vite
- Buat file hello-world.html di luar folder src
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>02_hello_world</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/hello-world/main.jsx"></script>
  </body>
</html>
```
## Setup Vite
- Secara default Vite hanya melayani satu entry HTML, yaitu index.html.
- Untuk itu perlu ada penyesuaian config vitenya, seperti ini:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        helloWorld: "hello-world.html",
      }
    }
  }
})
```
## Akses Webnya
```javascript
http://localhost:5173/hello-world.html
```
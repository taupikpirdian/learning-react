
# Nested Component
Nested Component adalah cara membuat komponen di dalam komponen.

## Hal yang perlu diketahui
- Penamaan Props wajib menggunakan kata children
- Props children adalah props yang digunakan untuk mengirimkan komponen di dalam komponen.
- Karena semua elemen di dalam <Container> ... </Container> akan otomatis dikumpulkan oleh React ke dalam props.children
    ```javascript
    <Container>
        <HelloWorld />
        <HelloWorld />
    </Container>
    ```
- React akan mengubahnya (secara konsep) jadi:
    ```javascript
    Container({
        children: [
            <HelloWorld />,
            <HelloWorld />
        ]
    })
    ```

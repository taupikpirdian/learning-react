import {createRoot} from "react-dom/client";
import HelloWorld from './HelloWorld.jsx'
import Container from './Container.jsx'

createRoot(document.getElementById("root"))
    .render(
        <Container>
            <HelloWorld />
        </Container>
);
import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import SplineViewer from './SplineViewer.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <SplineViewer />
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 10 ]
        } }
    >
        {/* <Experience /> */}
    </Canvas>
    </>
)
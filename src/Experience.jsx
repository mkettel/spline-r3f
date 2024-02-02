import { OrbitControls } from '@react-three/drei'
import Boxes from './Boxes'


export default function Experience()
{
    return <>

        <OrbitControls makeDefault minAzimuthAngle={-1} maxAzimuthAngle={2} minPolarAngle={0} maxPolarAngle={1.4} />
        
        <Boxes scale={0.5} />

    </>
}
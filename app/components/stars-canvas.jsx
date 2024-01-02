'use client'

// STAR
// Where creted everything from scratch
// Very hard 
// dont know what is happening here properly
// khate threejs documenation is dogshit


// NPM PACKAGE
import { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload} from '@react-three/drei';

// SPECIAL MATH UTILITY WE imported using Package maath
// for controlling the no of starts
import * as random from 'maath/random/dist/maath-random.esm'



// ACTUAL STAR 3D model: we created from scratch
const Stars = (  ) => {

  const ref = useRef( null);
  
  // creating shpere
  
  const sphere = random.inSphere(new Float32Array(13000), { radius:1.2} )

  // useFrame for moving  the stars frame by frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 100;
  });

  return (

    // group of sphere that we created above
    // rotating whole group of stars 
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled  >

        {/* material for stars */}
          <PointMaterial
            transparent
            color = '#f272c8'
            size = {0.002}
            sizeAttenuation = {true}
            depthWrite = {false}
          />
      </Points>

    </group>
  )
}




const StarsCanvas = () => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true)
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {render=== true && 
      // postion absolute and z indez -1 is set so it shown behind every other element
      <div className='hidden lg:block absolute w-full h-auto  inset-0 z-[-1] '>
      <Canvas camera= {{ position:[0,0,1]}}>

        <Suspense fallback = { null } >
          <Stars />
        </Suspense>

        <Preload all />

      </Canvas>


    </div>
      }
    </>
  )
}

export default StarsCanvas
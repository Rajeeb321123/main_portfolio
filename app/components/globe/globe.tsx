// my threee js globe
'use client'

// Using ES6 import statement
// @ts-ignore
import vertexShader from 'raw-loader!glslify-loader!./shaders/vertex.glsl'
// @ts-ignore
import fragmentShader from 'raw-loader!glslify-loader!./shaders/fragment.glsl'
// @ts-ignore
import atmosphereVertexShader from 'raw-loader!glslify-loader!./shaders/atmosphereVertex.glsl'
// @ts-ignore
import atmosphereFragmentShader from 'raw-loader!glslify-loader!./shaders/atmosphereFragment.glsl'

// Using require
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
// import gsap from 'gsap'
// import gsap from 'gsap'






export default function Globe() {

    const render = useRef<boolean>(true);
    const mouse:{x:number | undefined, y:number | undefined} = {x:undefined, y:undefined}

    const refContainer = useRef<any>(null);
    useEffect(() => {
        if (render.current === true) {

            // === THREE.JS CODE START ===
            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(75, refContainer.current?.offsetWidth / refContainer.current?.offsetHeight, 0.1, 1000);
            
            var renderer = new THREE.WebGLRenderer({
                // remove jaged edges , better resolution on edge
                antialias: true,
                alpha: true,

                // to load into div canvas below
                canvas: refContainer.current && refContainer.current.querySelector("canvas")

            });
            renderer.setSize(refContainer.current?.offsetWidth, refContainer.current?.offsetHeight);
            console.log(refContainer.current?.offsetWidth)
            renderer.setPixelRatio(window.devicePixelRatio)
            // document.body.appendChild( renderer.domElement );
            // use ref as a mount point of the Three.js scene instead of the document.body
            // refContainer.current && refContainer.current.appendChild(renderer.domElement);


            const sphere = new THREE.Mesh(
                new THREE.SphereGeometry(5, 50, 50),
                // As we are using our custom shader we dont want MeshBasicMaterial
                // new THREE.MeshBasicMaterial({
                //     // color: 0xff0000
                //     map: new THREE.TextureLoader().load(`./globeNight.jpg`)
                // })

                new THREE.ShaderMaterial({
                    vertexShader: vertexShader ,
                    fragmentShader: fragmentShader ,
                    uniforms: {
                        globeTexture: {
                            value: new THREE.TextureLoader().load('./globeDay.jpg')
                        }
                    }
                })
            );
            const atmosphere = new THREE.Mesh(
                new THREE.SphereGeometry(5, 50, 50),
                new THREE.ShaderMaterial({
                    vertexShader: atmosphereVertexShader,
                    fragmentShader: atmosphereFragmentShader ,
                    blending: THREE.AdditiveBlending,
                    // side is for where to show shadow
                    side: THREE.BackSide,
                })
            );

            atmosphere.scale.set( 1.1, 1.1, 1.1 );

            camera.position.z = 12

            // scene.add(sphere);
            scene.add(atmosphere);

            // we will be using group so we can move sphere without interrupting its original auto rotation
            const group = new THREE.Group();
            group.add(sphere);
            scene.add(group);
            var animate = function () {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                sphere.rotation.y +=  0.001;
                if(mouse.x !== undefined && mouse.y !== undefined ){
                    group.rotation.y = mouse.x ;
                    // gsap is causing flickering so , i didnt used it
                    // gsap.to(group.rotation, {
                    //     y: mouse.x * 0.5,
                    //     x: -mouse.y * 0.3,
                    //     duration: 2,
                        
                    // })
                    group.rotation.y += mouse.x *0.5;
                    group.rotation.x= -mouse.y * 0.3;
                    
                    // console.log(mouse)
                }
            };
            
            animate();

        }
        return (() => {

            render.current = false;
        })
    }, [mouse.x, mouse.y]);


    const handleMouseMove = (e:MouseEvent) => {
        //  e.stopPropagation();
        mouse.x = (e.clientX /window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY/window.innerWidth) * 2 - 1;

        // console.log(mouse)

    }

    useEffect(()=> {
        window.addEventListener("mousemove", handleMouseMove);        
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        }
  
    },[ handleMouseMove])
  

    return (
        <div
            className='w-full h-full'
            ref={refContainer}
        >
            <canvas
            >

            </canvas>

        </div>
    )
}

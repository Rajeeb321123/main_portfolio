
varying vec3 vertexNormal;

void main() {



    // for backside heavy lighting error
    vertexNormal = normalize(normalMatrix * normal);

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
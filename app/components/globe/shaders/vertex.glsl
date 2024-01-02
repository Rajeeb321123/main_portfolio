// look at 3.js webgl program doc and intermediate globe tutorial by chris course and book recommended by chris in youtube

// custom shader to customize the vertices
// vertex shader will place the vertices in given position
// here we arenot going to change vertices too much, but in fragment.glsl we will do the fill the pixels between vertices with correct colors
// but we still need vertex and fragment shader for main shader program to workxsdsdsd

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    // below in position,[x,y,z,w] 
    // we dont need it as, we will use provide by 3.js webgl program doc for position
    // gl_Position = vec4(position, 1);

    // passing uv(provided by 3.js look in in same docs above) using vec2 vertexUv to fragment.glsl 
    // UV mapping is a method for taking a 2-dimensional texture and mapping it onto a 3-dimensional
    vertexUV = uv;

    // vertexNormal is simply inwhich direction vertex is facing given by [x,y,z]
    // for backside heavy lighting error
    vertexNormal = normalize(normalMatrix * normal);

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
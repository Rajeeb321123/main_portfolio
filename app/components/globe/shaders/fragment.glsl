// in fragment.glsl we will do the fill the pixels between vertices with correct colors

// to load the jpg image
uniform sampler2D globeTexture;


// getting uv, vertexNormal from vertex.glsl
varying vec2 vertexUV;
varying vec3 vertexNormal;

// we are looping over th pixel
void main() {
    
    // below is like in rgba  like here is red
    // gl_FragColor = vec4(0, 1, 0, 1);

    // using globe image as texture ,below in vec3
    // gl_FragColor = texture2D(globeTexture, vertexUV);

    // we can add different shader  using like below. Here is in vec4. We have converted vec3 to vec4.
    // gl_FragColor = vec4(texture2D(globeTexture, vertexUV).xyz, 1.0);

    // we can add rgb to below to have color tint. Example reddish tint
    // gl_FragColor = vec4(vec3(0,0,1) + texture2D(globeTexture, vertexUV).xyz, 1.0);

    // this is for atmospheric effect by the creator 3.js himself
    float intensity = 1.05 - dot(vertexNormal, vec3( 0.0, 0.0, 1.0 ));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
}
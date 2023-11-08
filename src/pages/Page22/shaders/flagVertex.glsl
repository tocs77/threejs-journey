uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform vec2 u_frequency;
uniform float u_Time;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += sin(modelPosition.x * u_frequency.x + u_Time * 5.0) * 0.1;
    modelPosition.z += sin(modelPosition.y * u_frequency.y + u_Time * 3.0) * 0.1;
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
    vUv = uv;
    vElevation = modelPosition.z;
}

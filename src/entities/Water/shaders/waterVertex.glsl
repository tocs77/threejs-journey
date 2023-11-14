#include perlin3d.frag

uniform float u_BigWavesElevation;
uniform vec2 u_BigWavesFrequency;
uniform float u_Time;
uniform float u_BigWavesSpeed;
uniform float u_SmallWavesElevation;
uniform float u_SmallWavesFrequency;
uniform float u_SmallWavesSpeed;
uniform float u_SmallWavesIteration;

varying float v_Elevation;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation = sin(modelPosition.x * u_BigWavesFrequency.x + u_Time * u_BigWavesSpeed) *
        sin(modelPosition.z * u_BigWavesFrequency.y + u_Time * u_BigWavesSpeed) * u_BigWavesElevation;

    for(float i = 1.0; i <= u_SmallWavesIteration; i++) {
        elevation -= abs(cnoise(vec3(modelPosition.xz * u_SmallWavesFrequency * i, u_Time * u_SmallWavesSpeed)) * u_SmallWavesElevation / i);
    }

    modelPosition.y += elevation;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    v_Elevation = elevation;

}
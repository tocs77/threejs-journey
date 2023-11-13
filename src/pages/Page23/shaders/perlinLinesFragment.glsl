#include perlin.frag

varying vec2 vUv;

void main() {

    float strength = 1.0 - abs(cnoise(vUv * 10.0));
    gl_FragColor = vec4(vec3(strength), 1.0);
}

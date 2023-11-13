varying vec2 vUv;

void main() {
    float n = 10.0;

    float strengthX = step(0.8, mod(vUv.x * n, 1.0));
    float strengthY = step(0.8, mod(vUv.y * n, 1.0));
    gl_FragColor = vec4(vec3(strengthX + strengthY), 1.0);
}
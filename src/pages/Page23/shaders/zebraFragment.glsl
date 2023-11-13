varying vec2 vUv;

void main() {
    float n = 10.0;
    float strength = mod(vUv.y * n, 1.0);
    gl_FragColor = vec4(vec3(strength), 1.0);
}
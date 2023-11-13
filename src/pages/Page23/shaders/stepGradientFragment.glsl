varying vec2 vUv;

void main() {
    float n = 10.0;
    float strength = floor(vUv.x * n) / n;

    gl_FragColor = vec4(vec3(strength), 1.0);
}
varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    float n = 15.0;
    vec2 gridUv = vec2(floor(vUv.x * n) / n, floor(vUv.y * n) / n);
    float strength = random(gridUv);
    gl_FragColor = vec4(vec3(strength), 1.0);
}

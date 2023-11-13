varying vec2 vUv;

void main() {
    float n = 12.0;
    float width = 0.4;
    float barX = step(width, mod(vUv.x * n, 1.0));
    barX *= step(0.8, mod(vUv.y * n + width / 2.0, 1.0));

    float barY = step(0.8, mod(vUv.x * n + width / 2.0, 1.0));
    barY *= step(width, mod(vUv.y * n, 1.0));

    gl_FragColor = vec4(vec3(barX + barY), 1.0);
}
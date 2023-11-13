#define PI 3.141596

varying vec2 vUv;

void main() {

    float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    angle /= PI * 0.2 + 0.5;
    float sinusoid = sin(angle * 50.0);
    float radius = 0.25 + sinusoid * 0.01;
    float strength = 1.0 - step(0.01, abs(distance(vUv, vec2(0.5)) - radius));
    gl_FragColor = vec4(vec3(strength), 1.0);
}
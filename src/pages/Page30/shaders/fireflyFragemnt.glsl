void main() {
    float shift = 0.05;
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float stringth = shift / distanceToCenter - shift * 2.0;
    gl_FragColor = vec4(1.0, 1.0, 1.0, stringth);
}
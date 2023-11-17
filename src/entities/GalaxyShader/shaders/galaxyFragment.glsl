varying vec3 v_Color;

void main() {

    //Disc
    // float strength = distance(gl_PointCoord, vec2(0.5));
    // strength = 1.0 - step(0.5, strength);

    //Diffuse point
    // float strength = distance(gl_PointCoord, vec2(0.5));
    // strength *= 2.0;
    // strength = 1.0 - strength;

    //Light point pattern
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 6.0);

    gl_FragColor = vec4(v_Color, strength);
}
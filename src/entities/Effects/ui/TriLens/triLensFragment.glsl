uniform bool active;
uniform float fragments;

float rand(vec2 uv) {
    return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 uv2tri(vec2 uv) {
    float sx = uv.x - uv.y / 2.;
    float sxf = fract(sx);
    float offs = step(fract(1. - uv.y), sxf);
    return vec2(floor(sx) * 2. + sxf + offs, uv.y);
}

float tri(vec2 uv) {
    float sp = .3 * rand(floor(uv2tri(uv)));
    return max(0., sin(sp));
}

void mainUv(inout vec2 uv) {
    float t1 = 1.5;
    float c1 = tri(uv * (1. + fragments * fract(t1)) + floor(t1));
    uv.x += c1 * 0.1;
}
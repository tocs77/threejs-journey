uniform vec3 args;

void mainUv(inout vec2 uv) {
    uv = vec2(uv.x, uv.y + sin(uv.x * 10.0 * args.x) * 0.1 * args.y * tan(args.z));

}
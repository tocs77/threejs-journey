uniform vec3 tint;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    outputColor = inputColor * vec4(tint, 1.0);
}
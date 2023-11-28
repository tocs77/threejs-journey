uniform sampler2D normalMap;
uniform sampler2D tDiffuse;
uniform vec3 args;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec3 normalColor = texture2D(normalMap, uv).xyz * 2.0 - 1.0;
    vec2 newUv = uv + normalColor.xy * 0.05 * args.x;
    vec4 color = texture2D(tDiffuse, newUv);

    vec3 lightDirection = normalize(vec3(-1.0, 1.0, 0.0));
    float lightness = clamp(dot(normalColor, lightDirection), 0.0, 1.0);
    color.rgb += lightness * 2.0 * args.y;

    outputColor = color;
}
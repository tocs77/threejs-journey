uniform float uPixelRatio;
uniform float uSize;
uniform float uTime;

attribute float scale;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(uTime + modelPosition.x * 100.0) * scale * 0.2;
    modelPosition.z += sin(uTime * 0.5 + modelPosition.x * 100.0) * scale * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectPosition = projectionMatrix * viewPosition;

    gl_Position = projectPosition;
    gl_PointSize = uSize * uPixelRatio * scale;
    gl_PointSize *= (1.0 / -viewPosition.z);
}
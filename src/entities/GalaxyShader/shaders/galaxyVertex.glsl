uniform float u_PointSize;
uniform float u_Time;

attribute float scale;
attribute vec3 randomnes;

varying vec3 v_Color;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceToCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / distanceToCenter) * u_Time * 0.05;
    angle += angleOffset;

    modelPosition.x = distanceToCenter * cos(angle);
    modelPosition.z = distanceToCenter * sin(angle);

    modelPosition.xyz += randomnes;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    gl_PointSize = u_PointSize * scale;
    gl_PointSize *= (1.0 / -viewPosition.z);

    v_Color = color;

}
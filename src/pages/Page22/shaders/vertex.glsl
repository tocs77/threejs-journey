uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute float aRnd;

varying float vRandom;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.z += aRnd * 0.1;
  gl_Position = projectionMatrix * viewMatrix * modelPosition;

  vRandom = aRnd;
}

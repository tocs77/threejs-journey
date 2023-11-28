import { forwardRef, useMemo } from 'react';
import { Uniform, Vector2 } from 'three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

const fragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float amount;
  uniform float angle;

  varying vec2 vUv;

  void main() {

    vec2 offset = amount * vec2( cos(angle), sin(angle));
    vec4 cr = texture2D(tDiffuse, vUv + offset);
    vec4 cga = texture2D(tDiffuse, vUv);
    vec4 cb = texture2D(tDiffuse, vUv - offset);
    gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

  }
`;

class RGBShiftPass extends ShaderPass {
  constructor() {
    super({
      uniforms: {
        tDiffuse: { value: null },
        amount: { value: 0.005 },
        angle: { value: 0.0 },
        resolution: { value: new Vector2() },
      },
      vertexShader: [
        'varying vec2 vUv;',

        'void main() {',

        'vUv = uv;',
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

        '}',
      ].join('\n'),
      fragmentShader,
    });
  }
}

export const RGBShiftPassComponent = forwardRef((_, ref) => {
  const pass = useMemo(() => new RGBShiftPass(), []);
  return <primitive ref={ref} object={pass} dispose={null} />;
});

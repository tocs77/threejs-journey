import { useEffect, useRef, useState } from 'react';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';

type ControlTypes = 'color' | 'range' | 'boolean';

interface BaseControl {
  type: ControlTypes;
  name: string;
}

interface ColorControl extends BaseControl {
  type: 'color';
  value: string;
}

interface RangeControl extends BaseControl {
  type: 'range';
  min?: number;
  max?: number;
  step?: number;
  value: number;
}

interface BooleanControl extends BaseControl {
  type: 'boolean';
  value: boolean;
}

export type Control = ColorControl | RangeControl | BooleanControl;

export interface Controls {
  [controlName: string]: Control;
}

export const useControls = (controls: Controls) => {
  const [values, setValues] = useState<{ [controlName: keyof typeof controls]: any }>({});
  const valuesRef = useRef<{ [controlName: keyof typeof controls]: any }>();

  useEffect(() => {
    const defaultValues: { [controlName: keyof typeof controls]: any } = {};
    for (const controlName of Object.keys(controls)) {
      const control = controls[controlName];
      defaultValues[controlName] = control.value;
    }
    setValues(defaultValues);
    valuesRef.current = defaultValues;
  }, []);

  const updateValues = (controlName: keyof typeof controls, value: any) => {
    if (!valuesRef.current) {
      console.log('valuesRef.current is null');
      return;
    }
    const nevValues = { ...valuesRef.current, [controlName]: value };
    valuesRef.current = nevValues;
    setValues(nevValues);
  };

  useEffect(() => {
    const gui = new GUI();

    for (const controlName of Object.keys(controls)) {
      const control = controls[controlName];

      switch (control.type) {
        case 'color':
          gui
            .addColor(control, 'value')
            .name(control.name)
            .onChange((val) => updateValues(controlName, val));
          break;
        case 'range':
          gui
            .add(control, 'value', control.min || 0, control.max || 1, control.step || 0.01)
            .name(control.name)
            .onChange((val) => updateValues(controlName, val));
          break;
        case 'boolean':
          gui
            .add(control, 'value')
            .name(control.name)
            .onChange((val) => updateValues(controlName, val));
          break;
      }
    }

    return () => gui.destroy();
  }, []);

  return values;
};

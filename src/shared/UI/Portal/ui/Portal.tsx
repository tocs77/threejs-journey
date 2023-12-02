import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element?: HTMLElement;
  id?: string;
}
export const Portal = (props: PropsWithChildren<PortalProps>) => {
  const { children, id = 'app' } = props;
  let element = props.element;
  if (!element) {
    element = document.getElementById(id) as HTMLElement;
    if (!element) {
      element = document.body;
    }
  }
  return createPortal(children, element);
};

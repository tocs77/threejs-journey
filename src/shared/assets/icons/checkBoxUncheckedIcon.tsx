const CheckboxUncheckedIcon = ({ size, className }: { size: number; className?: string }) => {
  const SVG_ICON_SIZE = 16;
  const translationSize = size - SVG_ICON_SIZE - Math.ceil(size / SVG_ICON_SIZE);
  const transformString = `translate(${translationSize}px, ${translationSize}px) scale(${size / SVG_ICON_SIZE})`;

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox={`-1 -1 ${size} ${size}`} className={className}>
      <path
        style={{ transform: transformString, transformOrigin: 'center' }}
        fillRule='evenodd'
        clipRule='evenodd'
        stroke='none'
        d='M 13 2 H 3 C 2.4 2 2 2.4 2 3 V 13 C 2 13.6 2.4 14 3 14 H 13 C 13.6 14 14 13.6 14 13 V 3 C 14 2.4 13.6 2 13 2 Z M 3 13 V 3 H 13 V 13 H 3 Z'
      />
    </svg>
  );
};

export default CheckboxUncheckedIcon;

export const Environment = () => {
  return (
    <>
      <directionalLight
        position={[2, 2, 0]}
        castShadow
        shadow-normalBias={0.03}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-far={15}
        intensity={4}
      />
    </>
  );
};

import React from "react";

type SDLogoProps = {
  scale: number;
  color: string;
};

const SDLogo: React.FC<SDLogoProps> = ({ scale, color }) => {
  const transformY = (y: number) => {
    const scaleY = 330 / 160;
    return 185 + (y - 150) * scaleY;
  };

  return (
    <svg
      width={scale}
      height={scale}
      viewBox="35 185 330 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1={40}
        y1={transformY(260)}
        x2={360}
        y2={transformY(260)}
        stroke={color}
        strokeWidth={6}
        strokeLinecap="round"
      />

      <g stroke={color} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline
          points={`40,${transformY(260)} 80,${transformY(190)} 120,${transformY(220)} 160,${transformY(
            240
          )} 200,${transformY(245)} 240,${transformY(240)} 280,${transformY(220)} 320,${transformY(
            190
          )} 360,${transformY(260)}`}
        />
      </g>

      <g stroke={color} strokeWidth={6} fill="none">
        <polyline points={`40,${transformY(260)} 80,${transformY(190)} 120,${transformY(260)}`} />
        <polyline points={`120,${transformY(260)} 160,${transformY(240)} 200,${transformY(260)}`} />
        <polyline points={`200,${transformY(260)} 240,${transformY(240)} 280,${transformY(260)}`} />
        <polyline points={`280,${transformY(260)} 320,${transformY(190)} 360,${transformY(260)}`} />
      </g>

      <g stroke={color} strokeWidth={6} strokeLinecap="round">
        <line x1={80} y1={transformY(190)} x2={80} y2={transformY(260)} />
        <line x1={120} y1={transformY(220)} x2={120} y2={transformY(260)} />
        <line x1={160} y1={transformY(240)} x2={160} y2={transformY(260)} />
        <line x1={200} y1={transformY(245)} x2={200} y2={transformY(260)} />
        <line x1={240} y1={transformY(240)} x2={240} y2={transformY(260)} />
        <line x1={280} y1={transformY(220)} x2={280} y2={transformY(260)} />
        <line x1={320} y1={transformY(190)} x2={320} y2={transformY(260)} />
      </g>

      <g stroke={color} strokeWidth={6} strokeLinecap="round">
        <line x1={80} y1={transformY(150)} x2={80} y2={transformY(360)} />
        <line x1={320} y1={transformY(150)} x2={320} y2={transformY(360)} />
      </g>
    </svg>
  );
};

export default SDLogo;

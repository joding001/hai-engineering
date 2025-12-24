// SDLogo.tsx
type SDLogoProps = {
    w: number;
    h: number;
  };
  
  const SDLogo: React.FC<SDLogoProps> = ({ w, h }) => {
    return <img src="/s-d.svg" width={w} height={h} alt="SD Logo" />;
  };
  
export default SDLogo;  
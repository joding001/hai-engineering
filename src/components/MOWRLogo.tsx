type MOWRLogoProps = {
  scale: number;
  color: string;
};

const MOWRLogo: React.FC<MOWRLogoProps> = ({ scale, color }) => {
  return (
    <svg
      width={scale}
      height={scale}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.1387 14.3389H77.9713" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.00293 29.9521L18.6869 37.2618L22.2417 42.9975V50.3071H15.6256" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.2412 50.3071L26.2962 54.3554V69.4283" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M77.9714 33.7067V14.3388L80.7391 4.65482L91.11 1V91.11H46.0584H1V1L11.3776 4.65482L14.1387 14.3388V33.7067" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M83.1059 29.9521L73.422 37.2618L69.8672 42.9975V50.3071H76.4899" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M69.8677 50.3071L65.8193 54.3554V69.4283" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.2412 17.8003V23.3292" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M31.7656 20.5679V33.8066" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M31.7656 40.1294V46.0585" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M41.2891 29.9521V35.7812" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M41.2891 43.0908V63.4458" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M50.8193 59.6904V64.8325" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M50.8193 27.1836V38.7483" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M69.8672 19.1807V28.0776" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M60.3428 22.3418V35.7806" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M60.3428 44.2778V50.3069" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 68.7075C8.50972 68.7075 8.50972 72.7091 16.0194 72.7091C23.5292 72.7091 23.5292 68.7075 31.0389 68.7075C38.5486 68.7075 38.5486 72.7091 46.0583 72.7091C53.5681 72.7091 53.5681 68.7075 61.0778 68.7075C68.5875 68.7075 68.5875 72.7091 76.0972 72.7091C83.607 72.7091 83.607 68.7075 91.1167 68.7075" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 75.6899C8.50972 75.6899 8.50972 79.6916 16.0194 79.6916C23.5292 79.6916 23.5292 75.6899 31.0389 75.6899C38.5486 75.6899 38.5486 79.6916 46.0583 79.6916C53.5681 79.6916 53.5681 75.6899 61.0778 75.6899C68.5875 75.6899 68.5875 79.6916 76.0972 79.6916C83.607 79.6916 83.607 75.6899 91.1167 75.6899" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default MOWRLogo;

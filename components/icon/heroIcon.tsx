
interface HeroIconPropType {
  coordinate: string;
  style?: string
}

const HeroIcon = ({ coordinate, style }: HeroIconPropType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${ style }`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={ coordinate } />
    </svg>
  )
};

export default HeroIcon;
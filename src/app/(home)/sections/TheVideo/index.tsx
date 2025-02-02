import Image from "next/image";
import Benefit from './../../../../../public/img/home/HM_VID_001-preview.png'
const BenefitsSection: React.FC = () => {
  return (
	<section className="relative min-h-screen flex items-center justify-center bg-black">
	<div className="inset-0 tpk-contained">
	  <Image 
		src={Benefit} 
		alt="Benefits Section" 
		layout="fill" 
		objectFit="contain" 
		className="mx-auto"
	  />
	</div>
  </section>
  );
};

export default BenefitsSection;

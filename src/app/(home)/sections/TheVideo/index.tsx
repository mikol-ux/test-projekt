import Image from "next/image";
import Benefit from './../../../../../public/img/home/HM_VID_001-preview.png'
const BenefitsSection: React.FC = () => {
	return (
		<section className="tpk-contained relative h-[50vh] md:min-h-screen flex items-center justify-center">
			<div className="">
				<Image
					src={Benefit}
					alt="Benefits Section"
					layout="fill"
					objectFit="cover"
					className="mx-auto"
				/>
			</div>
		</section>
	);
};

export default BenefitsSection;

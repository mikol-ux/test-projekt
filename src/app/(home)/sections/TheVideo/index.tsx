import Image from "next/image";

const TheVideo: React.FC = () => {
	return <section className="tpk-contained relative h-[50vh] md:min-h-screen flex items-center justify-center">
		<div className="relative w-full">
			<div className="absolute bg-linear-to-b from-transparent from-30% to-black to-100% inset-0"></div>
			<Image
				width={1040}
				height={594}
				src="/img/home/HM_VID_001-preview.png"
				alt="Benefits Section"
				className="mx-auto object-cover w-full"
			/>
		</div>
	</section>
};

export default TheVideo;
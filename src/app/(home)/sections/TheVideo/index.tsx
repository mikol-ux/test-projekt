import Image from "next/image";

const TheVideo: React.FC = () => {
  return (
    <section className="tpk-contained">
      <div className="flex flex-col justify-center items-center">
        <div className="relative flex basis-full w-full justify-center">
          <Image
            src="/img/home/HM_VID_001-preview.png"
            alt="Venue Preview"
            width={1040}
            height={594}
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default TheVideo;

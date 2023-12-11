import { HeaderSection, ImageSection, IntroductionSection, NavElement } from "@/models/models";
import Image from "next/image";

type coreInfo = {
  title: string;
  pageSlug: string;
  navigationElements: NavElement[];
  seoData: string;
  sections: (HeaderSection | ImageSection | IntroductionSection)[];
};

const Hero = ({ coreInfo }: { coreInfo: coreInfo }) => {
  const title = (coreInfo.sections[0] as HeaderSection).fields.header;
  const landingImage = (coreInfo.sections[1] as ImageSection).fields.heroImage;
  const imageURL = `https:${landingImage.fields.file.url}`;

  return (
    <div className="h-screen w-full relative">
      <Image
        src={imageURL}
        alt={landingImage.fields.title}
        objectFit="cover"
        fill
      />
      <h1 className="z-10 absolute pl-12 top-20 font-bold text-2xl">{title}</h1>
    </div>
  );
};

export default Hero;

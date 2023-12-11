import { getAboutUsPage } from "@/helpers/helpers";
import { Sys } from "@/models/models";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SkyMasters Aviation - About Us | Contentful",
  description:
    "At SkyMasters Aviation, our passion for aviation takes flight, celebrating the rich history and cutting-edge technology that defines the world of aircraft. Step into the realm where the sky is not the limit but the beginning of a thrilling journey through time and innovation.",
};

type EntryProps = {
  metadata: { tags: [] }
  sys: Sys;
  fields: {
    backdropImage: {
      metadata: { tags: [] }
      sys: Sys;
      fields: {
        title: string;
        description: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            }
          }
          fileName: string;
          contentType: string
        }
      }
    }
    imageAltText: string;
    title: string;
    shortDescription: string;
    externalLink: string;
  }
}

const AboutPage = async () => {
  const aboutUsPage = await getAboutUsPage();
  const featuredPieces = aboutUsPage?.fields?.featuredPieces;
  const discoverMore = aboutUsPage?.fields?.discoverMore;

  return (
    <div className="w-full">
      <h1 className="absolute z-10 text-white text-center w-full mt-6 font-bold text-2xl">
        {featuredPieces[1].fields.header}
      </h1>
      <Image
        src={`https:${featuredPieces[0].fields.heroImage.fields.file.url}`}
        alt={featuredPieces[0].fields.heroImage.fields.description}
        width={1000}
        height={1000}
        className="w-full"
      />
      <div className="w-full px-12">
        <h2 className="text-center text-2xl font-bold mt-8">
          {featuredPieces[2].fields.introTitle}
        </h2>
        <h3 className="text-center text-xl my-4 ">
          {featuredPieces[2].fields.introduction.content[0].content[0].value}
        </h3>
        <p className="text-center text-lg my-4">
          {featuredPieces[2].fields.introduction.content[1].content[0].value}
        </p>
        <p className="text-center">
          {featuredPieces[2].fields.introduction.content[2].content[0].value}
        </p>
      </div>
      <div className="w-full mt-24 border-t-red-400 border-t-2 pt-24 flex px-28 flex-wrap mb-36 justify-center">
        {discoverMore.map((card: EntryProps) => (
          <section
            className="text-center w-4/12 h-72 mb-16 relative"
            key={card.sys.id}
          >
            <Image
              src={`https:${card?.fields?.backdropImage?.fields?.file.url}`}
              fill
              objectFit="cover"
              alt={card.fields.backdropImage.fields.description}
              className="w-full h-full px-2"
            />
            <div className="z-10 absolute w-full h-full flex justify-center items-center flex-col">
              <h1 className="font-bold text-xl mb-2 text-white">{card.fields.title}</h1>
              <p className="mb-2 text-white font-bold">{card.fields.shortDescription}</p>
              <Link
                href={card.fields.externalLink}
                target="_blank"
                className="p-2 w-28 text-black bg-white rounded-md hover:bg-slate-100"
              >
                Discover
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

import { Sys } from "@/models/models";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import Image from "next/image";
import Link from "next/link";

type AboutUsProps = {
  aboutUsPage: {
    fields: {
      discoverMore: {
        fields: {
          backdropImage: {
            metadata: { tags: [] };
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
                  };
                };
                fileName: string;
                contentType: string;
              };
            };
          };
          imageAltText: string;
          title: string;
          shortDescription: string;
          externalLink: string;
        };
        metadata: { tags: [] };
        sys: Sys;
      }[];
      featuredPieces: {
        fields: {
          header: string;
          introTitle: string;
          heroImage: {
            fields: {
              description: string;
              file: {
                contentType: string;
                details: {
                  image: {
                    height: number;
                    width: number;
                  };
                  size: number;
                };
                url: string;
              };
              title: string;
            };
            metadata: { tags: [] };
            sys: Sys;
          };
          imageTitle: string;
          introduction: {
            content: {
              content: {
                data: {};
                marks: [];
                nodeType: string;
                value: string;
              }[];
              data: {};
              nodeType: string;
            }[];
            data: {};
            nodeType: string;
          };
        };
        metadata: { tags: [] };
        sys: Sys;
      }[];
      seoMetadata: string;
      slug: string;
      title: string;
    };
    metadata: { tags: [] };
    sys: Sys;
  };
};

type MappedItems = {
  fields: {
    backdropImage: {
      fields: {
        description: string;
        file: {
          contentType: string;
          details: {
            image: {
              width: number;
              height: number;
            };
            size: number;
          };
          fileName: string;
          url: string;
        };
        title: string;
      };
      metadata: { tags: [] };
      sys: Sys;
    };
    externalLink: string;
    imageAltText: string;
    shortDescription: string;
    title: string;
  };
  metadata: { tags: [] };
  sys: Sys;
};

const About = ({ aboutUsPage }: AboutUsProps) => {
  // const featuredPieces = aboutUsPage?.fields?.featuredPieces;
  // const discoverMore = aboutUsPage?.fields?.discoverMore;

  console.log("ABOUT US RESP", aboutUsPage);
  const inspectorProps = useContentfulInspectorMode();
  const data = aboutUsPage?.fields;
  console.log(data);

  return (
    <div className="w-full">
      <h1
        className="absolute z-10 text-white text-center w-full mt-6 font-bold text-2xl"
        {...inspectorProps({
          fieldId: "header",
          entryId: data.featuredPieces[1].sys.id,
        })}
      >
        {data.featuredPieces[1].fields.header}
      </h1>
      <Image
        src={`https:${data.featuredPieces[0].fields.heroImage.fields.file.url}`}
        alt={data.featuredPieces[0].fields.heroImage.fields.description}
        width={1000}
        height={1000}
        className="w-full"
        {...inspectorProps({
          fieldId: "heroImage",
          entryId: data.featuredPieces[0].sys.id,
        })}
      />
      <div className="w-full px-12">
        <h2
          className="text-center text-2xl font-bold mt-8"
          {...inspectorProps({
            fieldId: "introTitle",
            entryId: data.featuredPieces[2].sys.id,
          })}
        >
          {data.featuredPieces[2].fields.introTitle}
        </h2>
        <h3
          className="text-center text-xl my-4"
          {...inspectorProps({
            fieldId: "introTitle",
            entryId: data.featuredPieces[2].sys.id,
          })}
        >
          {
            data.featuredPieces[2].fields.introduction.content[0].content[0]
              .value
          }
        </h3>
        <p
          className="text-center text-lg my-4"
          {...inspectorProps({
            fieldId: "introTitle",
            entryId: data.featuredPieces[2].sys.id,
          })}
        >
          {
            data.featuredPieces[2].fields.introduction.content[1].content[0]
              .value
          }
        </p>
        <p
          className="text-center"
          {...inspectorProps({
            fieldId: "introTitle",
            entryId: data.featuredPieces[2].sys.id,
          })}
        >
          {
            data.featuredPieces[2].fields.introduction.content[2].content[0]
              .value
          }
        </p>
      </div>
      <div className="w-full mt-24 border-t-red-400 border-t-2 pt-24 flex px-28 flex-wrap mb-36 justify-center">
        {data.discoverMore.map((card: MappedItems) => (
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
              {...inspectorProps({
                fieldId: "backdropImage",
                entryId: card.fields.backdropImage.sys.id,
              })}
            />
            <div className="z-10 absolute w-full h-full flex justify-center items-center flex-col">
              <h1
                className="font-bold text-xl mb-2 text-white"
                {...inspectorProps({
                  fieldId: "title",
                  entryId: card.sys.id,
                })}
              >
                {card.fields.title}
              </h1>
              <p
                className="mb-2 text-white font-bold"
                {...inspectorProps({
                  fieldId: "shortDescription",
                  entryId: card.sys.id,
                })}
              >
                {card.fields.shortDescription}
              </p>
              <Link
                href={card.fields.externalLink}
                target="_blank"
                className="p-2 w-28 text-black bg-white rounded-md hover:bg-slate-100"
                {...inspectorProps({
                    fieldId: "externalLink",
                    entryId: card.sys.id,
                  })}
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

export default About;

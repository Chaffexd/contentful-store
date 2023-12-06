type descriptionInfoProps = {
  metadata: Metadata;
  sys: Sys;
  fields: {
    introTitle: string;
    introduction: {
      data: {};
      content: Array<{
        data: {};
        content: Array<{
            data: {};
            marks: [];
            value: string;
            nodeType: string; 
        }>;
        nodeType: string;
      }>;
      nodeType: string;
    };
  };
};

const HeroDesc = ({
  descriptionInfo,
}: {
  descriptionInfo: descriptionInfoProps;
}) => {
  const title = descriptionInfo.fields.introTitle;
  const introTitle = descriptionInfo.fields.introduction.content[0].content[0].value;
  const paragraphs = descriptionInfo.fields.introduction.content
    .filter((item) => item.nodeType === "paragraph")
    .map((paragraph) => paragraph.content);
  
    const renderParagraphs = paragraphs.map((paragraph, index) => (
        <p key={index} className="my-8">{paragraph.map((segment, segIndex) => (
            <span key={segIndex}>{segment.value}</span>
        ))}</p>
    ))


  return (
    <section className="px-20 pt-12">
      <h2 className="font-bold text-2xl">{title}</h2>
      <h3 className="text-xl mt-4">{introTitle}</h3>
      <div className="mt-4">
        {renderParagraphs}
      </div>
    </section>
  );
};

export default HeroDesc;

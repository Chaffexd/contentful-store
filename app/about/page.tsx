"use client";
import { getAboutUsPage } from "@/helpers/helpers";
import { ContentfulLivePreview } from "@contentful/live-preview";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import About from "@/components/About/About";

/* export const metadata: Metadata = {
  title: "SkyMasters Aviation - About Us | Contentful",
  description:
    "At SkyMasters Aviation, our passion for aviation takes flight, celebrating the rich history and cutting-edge technology that defines the world of aircraft. Step into the realm where the sky is not the limit but the beginning of a thrilling journey through time and innovation.",
}; */

ContentfulLivePreview.init({
  locale: "en-US",
  enableInspectorMode: true,
  enableLiveUpdates: true,
  debugMode: false,
});

const AboutPage = async () => {
  const aboutUsPage = await getAboutUsPage();

  return (
    <ContentfulLivePreviewProvider locale="en-US">
      <About aboutUsPage={aboutUsPage} />
    </ContentfulLivePreviewProvider>
  );
};

export default AboutPage;

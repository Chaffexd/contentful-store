import Hero from "../components/Hero/Hero";
import HeroDesc from "../components/Hero/HeroDesc";
import { getLandingPage } from "../helpers/helpers";

// this will cause the page to revalidate every hour for any changes
export const revalidate = 3600;

export default async function Home() {
  const landingPage = await getLandingPage();
  const coreInfo = landingPage.fields;
  // console.log(coreInfo)

  return (
    <main>
      <section className="h-screen">
        <Hero coreInfo={coreInfo} />
        <HeroDesc descriptionInfo={coreInfo.sections[2]} />
      </section>
    </main>
  );
}

"use client";
import {
  ExperienceRoot,
  ExternalSDKMode,
  createExperience,
} from "@contentful/experience-builder";

const ExperienceBuilderWrapper = ({ experienceEntry, referencedAssets, referencedEntries, slug, locale }) => {
  const experience = createExperience({
    experienceEntry,
    referencedAssets,
    referencedEntries,
    locale: locale,
    mode: mode as ExternalSDKMode,
  });

  if(!slug || !experienceEntry) {
    return <p>404 Page Not Found</p>
  }

  return <ExperienceRoot experience={experience} locale={locale} />;
};

export default ExperienceBuilderWrapper;

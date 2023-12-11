/* "use client"
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { useContentfulLiveUpdates } from '@contentful/live-preview/react'

const Wrapper = ({ children }) => {
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableInspectorMode={true}
      enableLiveUpdates={true}
      debugMode={true}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
};

export default Wrapper; */

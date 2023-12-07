type Metadata = {
  tags: any[];
};

type Sys = {
  space: {
    sys: [];
  };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: [];
  };
  revision: number;
  contentType: {
    sys: [];
  };
  locale: string;
};

type Fields = {
  name: string;
  navElements: NavElement[];
};

type NavElement = {
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    slug: string;
  };
};

type HeaderSection = {
  metadata: Metadata;
  sys: Sys;
  fields: {
    header: string;
  };
};

type ImageSection = {
    metadata: Metadata;
    sys: Sys;
    fields: {
        imageTitle: string;
        heroImage: Image;
    }
}

type Image = {
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    description: string
    file: {
        url: string;
        details: {};
        fileName: string;
        contentType: string;
    }
  };
};

type IntroductionSection = {
  metadata: Metadata;
  sys: Sys;
  fields: {
    introTitle: string;
    introduction: string;
  };
};


type ProductInfo = {
  metadata: Metadata;
  sys: Sys;
  fields: {
    productTitle: string;
    productDescription: {};
    category: [];
    productImage: {};
  };
};
import type { ComponentDefinition } from "@contentful/experience-builder";

export const imageComponentDefinition: ComponentDefinition = {
  id: "Image",
  name: "Image",
  category: "Components",
  variables: {
    imageUrl: {
      displayName: "ImageURL",
      type: "Text",
      defaultValue:
        "https://images.pexels.com/photos/164589/pexels-photo-164589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    width: {
      displayName: "Width",
      type: "Number",
      defaultValue: 600,
      group: "style",
    },
    height: {
      displayName: "Height",
      type: "Number",
      defaultValue: 500,
      group: "style",
    },
    altText: {
      type: "Text",
      displayName: "Alt Text",
      defaultValue: "value2",
      group: "style",
      // restricts the values to the pre-defined list of options
      validations: {
        in: [
          { value: "value1", displayName: "Aircraft" },
          { value: "value2", displayName: "It's a plane" },
        ],
      },
    },
  },
};

export const titleComponentDefinition: ComponentDefinition = {
  id: "Title",
  name: "Title",
  category: "Components",
  variables: {
    productTitle: {
      displayName: "Title",
      type: "Text",
      description: "The title of this new product",
      defaultValue: "Example product Title",
    },
  },
};

export const descriptionComponentDefinition: ComponentDefinition = {
  id: "Description",
  name: "Description",
  category: "Components",
  variables: {
    productDescription: {
      displayName: "Description",
      type: "RichText",
      description: "The description of this new product",
      defaultValue: "Example product Description...",
    },
  },
};

export const priceComponentDefinition: ComponentDefinition = {
  id: "Price",
  name: "Price",
  category: "Components",
  variables: {
    price: {
      displayName: "Price",
      type: "Number",
      description: "The Price of this new product",
      defaultValue: "Example product Price: £1234",
    },
  },
};

export const fullProductComponent: ComponentDefinition = {
  id: "ProductLayout",
  name: "Product Layout",
  category: "Product Section",
  variables: {
    productImage: {
      displayName: "ImageURL",
      type: "Text",
      defaultValue:
        "https://images.pexels.com/photos/164589/pexels-photo-164589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    width: {
      displayName: "Width",
      type: "Number",
      defaultValue: 600,
      group: "style",
    },
    height: {
      displayName: "Height",
      type: "Number",
      defaultValue: 500,
      group: "style",
    },
    altText: {
      type: "Text",
      displayName: "Alt Text",
      defaultValue: "value2",
      group: "style",
      // restricts the values to the pre-defined list of options
      validations: {
        in: [
          { value: "value1", displayName: "Aircraft" },
          { value: "value2", displayName: "It's a plane" },
        ],
      },
    },
    productTitle: {
      displayName: "Title",
      defaultValue: "Aircraft",
      type: "Text"
    },
    productDescription: {
      displayName: "Description",
      defaultValue: "This is an aircraft description",
      type: "Text"
    },
    price: {
      displayName: "Price (GBP)",
      type: "Number"
    },
    category: {
      displayName: "Category",
      type: "Text"
    }
  },
};

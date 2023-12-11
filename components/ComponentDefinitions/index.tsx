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
          { value: "value1", displayName: "Parrots" },
          { value: "value2", displayName: "Alpaca" },
        ],
      },
    },
  },
};

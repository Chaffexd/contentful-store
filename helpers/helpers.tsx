const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getLandingPage() {
  try {
    const landingPage = await client.getEntry("rRMVaehWAwhOMCCqNYcZp");
    return landingPage;
  } catch (error) {
    console.error(error);
  }
}

export async function getNavBar() {
  try {
    const navBar = await client.getEntry("6PEiRItvba96JpiBGcbEm");
    return navBar;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsPage() {
  try {
    const productPage = await client.getEntry("6hwaGRYuWpLvtUfaQt2xgk");
    return productPage;
  } catch (error) {
    console.log(error);
  }
}

export async function getAboutUsPage() {
  try {
    const aboutUsPage = await client.getEntry("4g3x9G3PoBOi1Q6GwUnj9J");
    return aboutUsPage;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsPageEntries() {
  try {
    const productPage = await client.getEntries();
    return productPage;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts() {
  try {
    const allProducts = await client.getEntries({
      content_type: "product",
    });
    return allProducts;
  } catch (error) {
    console.log(error);
  }
}

export async function getSingleProduct(slug: string) {
  const entry = await client.getEntries({
    content_type: "product",
    "fields.slug[match]": slug,
  });

  return entry;
}
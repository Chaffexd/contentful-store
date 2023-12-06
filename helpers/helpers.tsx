const contentful = require("contentful");
const client = contentful.createClient({
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

export async function getProductsPage () {
    try {
        const productPage = await client.getEntry("6hwaGRYuWpLvtUfaQt2xgk");
        return productPage;
    } catch (error) {
        console.log(error)
    }
}

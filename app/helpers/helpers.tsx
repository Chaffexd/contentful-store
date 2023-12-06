const contentful = require("contentful");
const client = contentful.createClient({
  space: "812nv7ll3wb5",
  accessToken: "tlP40MEDQGjRmqeSL9tS__Eg3C4aiVH7K8d7gISqey0",
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

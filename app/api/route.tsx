import { client } from "@/helpers/helpers";
export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId;

  const entry = await client.getEntries({
    content_type: "product",
    "fields.slug[match]": productId,
  });

  const productInfo = entry.items;
  return Response.json(productInfo);
}

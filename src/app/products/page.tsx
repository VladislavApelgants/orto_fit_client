import { Products } from "@/components/services/products/Products";
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <>
      <Products query={params} />
    </>
  );
}

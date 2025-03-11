import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { CategorySidebar } from "../components/CategorySidebar/CategorySidebar";
import { ProductDescription } from "../components/ProductDescription/ProductDescription";

export function ProductPage() {

  const { product, slug } = useParams();

  const { data, isLoading, error } = useGet(
    `http://localhost:4242/products/${slug}`
  );
  console.log("product details", data);

  return (
    <div>
      <CategorySidebar />

      <div>
        <ProductDescription 
        image={data?.data.image}
        title={data?.data.name}
        description={data?.data.description}
        price={`Pris: ${data?.data.price} kr`}
        />
      </div>

        {/* comments */}
      <section>

      </section>
    </div>
  );
}

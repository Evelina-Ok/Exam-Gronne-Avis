import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { useGet } from "../hooks/useGet";
import { CategorySidebar } from "../components/CategorySidebar/CategorySidebar";

export function CategoryPage() {

    const { slug } = useParams();
  
  const { data, isLoading, error } = useGet(`http://localhost:4242/products/category/${slug}`);
  console.log("list of categories", data);

  const navigate = useNavigate();

  return (
    <div>
        
        <CategorySidebar />      

      {data?.message.length > 0 ? (
        <p>Der er ingen produkter i denne kategori</p>
     ) : ( data?.data.map((item) => {
        return (
          <Card
            key={item.id}
            image={item.image}
            title={item.name}
            description={item.description}
            action={() => navigate(`/product/${item.slug}`)}
          ></Card>
        );
      })
      )}
    </div>
  );
}

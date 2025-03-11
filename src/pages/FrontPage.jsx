import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import { ProductCard } from "../components/ProductCard/ProductCard";

export function FrontPage () {

    return (
        <div>
            <ProductCard />

            <section>
            <CategoryCard />      
            </section>     
        
        </div>
    )
}
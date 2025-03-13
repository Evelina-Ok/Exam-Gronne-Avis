import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Separator } from "../components/Separator/Separator";

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
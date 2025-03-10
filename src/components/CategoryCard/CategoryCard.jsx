import { useGet } from "../../hooks/useGet"; 
import style from "./CategoryCard.module.scss"

export function CategoryCard() {
  const { data, isLoading, error } = useGet("http://localhost:4242/categories");
  console.log("random categories", data);

  return (
    <div>
              
      <section className={style.randomCategories}>
        {data?.data
          .sort(() => Math.random() - 0.5)
          .slice(0, 6)
          .map((item) => {
            return (
              <div 
              className={style.categoryCard}
              key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.category_image} />
              </div>
            );
          })}
      </section>
    </div>
  );
}

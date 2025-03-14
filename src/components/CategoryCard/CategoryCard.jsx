import { useGet } from "../../hooks/useGet"; 
import { NavLink } from "react-router-dom";
import style from "./CategoryCard.module.scss"

export function CategoryCard() {
  const { data, isLoading, error } = useGet("http://localhost:4242/categories");
  console.log("random categories", data);

  return (
    <div>
              
      <section className={style.categoryContainer}>
        {data?.data
          .sort(() => Math.random() - 0.5)
          .slice(0, 6)
          .map((item) => {
            return (
              <NavLink
            key={item.id}
            to={`/categories/${item.slug}`}>
              <div 
              className={style.categoryCard}
              >
              <img src={item.category_image} />
              <h3>{item.name}</h3>
              </div>
              </NavLink>
            );
          })}
      </section>
    </div>
  );
}

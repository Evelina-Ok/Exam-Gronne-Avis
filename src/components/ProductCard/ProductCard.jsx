import style from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";
import { useGet } from "../../hooks/useGet";

export function ProductCard() {
  const { data, isLoading, error } = useGet("http://localhost:4242/products");
  console.log("chosen products", data);

  return (
    <>
    <section className={style.productContainer}>
      {data?.data
        .sort(() => Math.random() - 0.5)
        .slice(0, 6)
        .map((item) => {
          return (
            <NavLink
            key={item.id}
            to={`/product/${item.id}`}>
              <div
              className={style.productCard}
               >
                <img src={item.image}  alt={item.name} />
                <h3>{item.name}</h3>
              </div>
            </NavLink>
          );
        })}
        </section>
    </>
  );
}

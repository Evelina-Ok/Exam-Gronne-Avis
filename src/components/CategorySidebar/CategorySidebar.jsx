import { NavLink } from "react-router-dom";
import { useGet } from "../../hooks/useGet";
import style from "./CategorySidebar.module.scss"

export const CategorySidebar = () => {
  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGet("http://localhost:4242/categories");
  console.log("list of categories", categoryData);

  return (
    <div className={style.sidebar}>
      <h2>Alle kategorier</h2>

      {categoryData?.data.map((item) => {
        return (
            <NavLink 
            key={item.id}
            to={`/categories/${item.slug}`}
            style={({isActive}) => ({
              fontWeight: isActive ? "bold" : "normal"
            })}             
            >
            <ul>
            <li>{item.name}</li>
            </ul>
          </NavLink>
        );
      })}
    </div>
  );
};

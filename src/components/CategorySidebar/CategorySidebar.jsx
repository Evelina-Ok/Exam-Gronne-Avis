import { NavLink } from "react-router-dom";
import { useGet } from "../../hooks/useGet";

export const CategorySidebar = () => {
  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGet("http://localhost:4242/categories");
  console.log("list of categories", categoryData);

  return (
    <div>
      <h2>Alle kategorier</h2>

      {categoryData?.data.map((item) => {
        return (
            <NavLink 
            key={item.id}
            to={`/categories/${item.slug}`}
            >
          <div>
            <h3>{item.name}</h3>
          </div>
          </NavLink>
        );
      })}
    </div>
  );
};

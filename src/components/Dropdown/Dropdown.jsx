import { useNavigate } from "react-router-dom";
import { useGet } from "../../hooks/useGet";
import style from "./Dropdown.module.scss"

export function Dropdown() {
  const { data, isLoading, error } = useGet(
    "http://localhost:4242/categories");
  console.log("dropdown categories", data);

  let navigate = useNavigate();

  return (
    <div className={style.dropdown}>
      <select
        onChange={(event) => {
          navigate(`/categories/${event.target.value}`);
        }}
        value={""}
      >
        <option value="" disabled>
          vælg kategori
        </option>
        {data?.data.map((item) => {
          return (
            <option key={item.id} value={item.slug}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

import style from "./Pagination.module.scss";
import chevron from "../../assets/icons/chevron.png";

export function Pagination({ pageBack, pageForward, pageCount }) {
  return (
   <div className={style.pagination}>
      <button onClick={() => pageBack()}>
      <img src={chevron} alt="page backwards button" />
      </button>
      <span>{pageCount}</span>
      <button onClick={() => pageForward()}>
        <img src={chevron} alt="page forward button" />
      </button>
    </div>
  );
}

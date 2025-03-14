import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import style from "./Header.module.scss";

export function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <span onClick={() => navigate("/")} className={style.logo}>
        <h1>
          Den Grønne <span>Avis</span>
        </h1>
      </span>
      <div className={style.choices}>
        <Dropdown />
        <Button
          action={() => navigate("/opret-annonce")}
          color="blue"
          size="medium"
          title="opret annonce"
        />
      </div>
      <div className={style.icons}>
        <img src="/mail.svg" alt="" />
        <img src="/info.svg" alt="" />
        <img
          src="/user.svg"
          alt=""
          onClick={() => navigate("/login")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </header>
  );
}

import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import style from "./Header.module.scss"

export function Header() {

  const navigate = useNavigate();
  return (
    <header>
      <span 
      onClick={() => navigate("/")}
      className={style.logo}>
        <h1>Den Grønne <span>Avis</span></h1>
      </span>
      <Dropdown />
      <Button color="blue" size="medium" title="opret annonce"/>
    </header>
  );
}

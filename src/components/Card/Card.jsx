import style from "./Card.module.scss";

export function Card({ title, image, description, price, slug, id, action, children }) {
  return (
    <div className={style.cardContainer}>
    <div
      className={`${style.card} `}
      onClick={action}
    >
        <img src={`${image}`} />
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
        {children}
    </div>
    </div>
  );
}

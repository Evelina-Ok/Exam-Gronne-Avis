import style from "./Card.module.scss";

export function Card({ title, image, description, price, slug, id, action, children }) {
  return (
    <div
      className={`${style.cardStyle} `}
      onClick={action}
    >
        <img src={`${image}`} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
        {children}
    </div>
  );
}

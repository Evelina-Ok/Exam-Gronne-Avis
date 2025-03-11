import style from "./ProductDescription.module.scss"
export const ProductDescription = ({ image, title, description, price }) => {
  return (
    <article className={style.productDescription}>
        <img src={image} />
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{price} </h3>
    </article>
  )
}

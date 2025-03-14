import style from "./DonationCard.module.scss"

export function DonationCard ({ backgroundImage, header, subtext, sum, footertext,}) {

return (
<figure className={style.donationCard}
style={{
    backgroundImage: `url(${backgroundImage})`,
    }}>
      
        <h2>{header}</h2>
        <h3>{subtext}</h3>
            <span>
          <h1>{sum}</h1>
          </span>
        <p>{footertext}</p>
    </figure>
)
}
import style from "./MissionBanner.module.scss"

export function MissionBanner () {
    return (
        <figure className={style.missionBanner}>
            <h1>Den Grønne Avis</h1>
            <h2>Vi går forest i kampen om klimaet ved at give 2 kr. til klima-venlige formål, hver gang du handler brugt på Den Grønne Avis</h2>
        </figure>
    )
}
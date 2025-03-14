import style from "./Wrapper.module.scss"

export function Wrapper ({children}) {
    return (
    <section className={style.wrapper}>{children}</section>
    )
}
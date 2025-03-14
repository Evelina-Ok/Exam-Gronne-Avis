import style from "./GridContainer.module.scss"

export function GridContainer ({column, gap, children }) {
    return (
        <section className={`${style.gridStyle}
            ${style[`column-${column}`]}
            ${style[`gap-${gap}`]}`
        }> {children}
        </section>
    );
}
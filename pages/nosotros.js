import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'
import Image from "next/image"

export default function Nosotros() {
    return (
        <>
            <Layout
                title={"Nosotros"}
                description="Sobre nosotros, guitarLA, tienda de música"
            >
                <main className="contenedor">
                    <h2 className="heading">Nosotros</h2>
                    <div className={styles.contenido}>
                        <Image alt="imagen sobre nosotros" src="/img/nosotros.jpg" width={1000} height={800} />

                        <div>
                            <p>
                                Vivamus vitae elementum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus convallis sagittis nisl, vitae venenatis diam luctus id. Phasellus at laoreet metus. Vestibulum mattis venenatis molestie. In vitae gravida massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc lobortis velit vel nulla vulputate scelerisque.
                            </p>
                            <p>
                                Maecenas sed justo dapibus, sollicitudin ipsum pellentesque, sagittis lorem. Duis quis auctor lacus, at semper arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent et volutpat lectus, sit amet cursus mauris. Vestibulum egestas, nibh sit amet dictum posuere, ex risus ornare turpis, sed dapibus sapien ex sed risus.
                            </p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

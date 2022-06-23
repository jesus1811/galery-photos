import Head from "next/head";
import styles from "./styles.module.scss";
export const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>Galeria de imagenes</title>
        <meta name="description" content="aplicacion para visualizar y subir imagenes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
};

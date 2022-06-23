import styles from "./styles.module.scss";

export const File = ({ children, onChange }) => {
  return (
    <div className={styles.containerFile}>
      <p className={styles.titleFile}>
        {children}
      </p>
      <input className={styles.file} type="file" onChange={onChange} />
    </div>
  );
};

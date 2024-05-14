import styles from './styles.module.css';

// 나중에 onChange 로직 추가
const MediumButton = ({
                          disable,
                          value,
                      }) => {
    return (<button className={styles.button} disabled={disable}>{value}</button>);
};

export default MediumButton;

import styles from './styles.module.css';

// 나중에 onChange 로직 추가
const SmallButton = ({
                         disable,
                         value,
                     }) => {
    return (<button className={styles.button} disabled={disable}>{value}</button>);
};

export default SmallButton;

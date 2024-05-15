import styles from './styles.module.css';

const MediumButton = ({
                          disable,
                          value,
                          onClick,
                      }) => {
    const backgroundColor = {backgroundColor: disable ? '#ACA0EB' : '#7F6AEE'};

    return (<button className={styles.button} style={backgroundColor} disabled={disable}
                    onClick={onClick}>{value}</button>);
};

export default MediumButton;

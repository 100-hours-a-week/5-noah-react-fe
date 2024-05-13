import styles from './styles.module.css';

const SubmitInput = ({
                         backgroundColor,
                         disabled,
                         value,
                     }) => {
    return (<input className={styles.submitButton} type={'submit'} style={{backgroundColor: backgroundColor}}
                   disabled={disabled} value={value}></input>);
};

export default SubmitInput;

import styles from './styles.module.css';

const LabeledInput = ({
                          labelText,
                          type,
                          name,
                          value,
                          onChange,
                          placeholder,
                          minLength,
                          maxLength,
                      }) => {
    return (<>
        <label className={styles.label} htmlFor={name}>{labelText}</label>
        <input className={styles.input} type={type} id={name} name={name} value={value} onChange={onChange}
               placeholder={placeholder} minLength={minLength} maxLength={maxLength}/>
    </>);
};

export default LabeledInput;

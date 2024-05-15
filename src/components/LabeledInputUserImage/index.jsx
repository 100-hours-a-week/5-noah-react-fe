import styles from './styles.module.css';
import {useState} from 'react';

const DEFAULT_USER_IMAGE_PATH = '/etc-images/sign-up-default-background-image.png';

const LabeledInputUserImage = ({
                                   name,
                                   onChange,
                               }) => {
    const [imageSrc, setImageSrc] = useState(DEFAULT_USER_IMAGE_PATH);

    const handleChangeUserImage = (event) => {
        if (!event.target.files) {
            setImageSrc(DEFAULT_USER_IMAGE_PATH);
            onChange(null);
            return;
        }

        const userImage = event.target.files[0];

        if (!userImage) {
            setImageSrc(DEFAULT_USER_IMAGE_PATH);
            onChange(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            if (typeof fileReader.result === 'string') {
                setImageSrc(fileReader.result);
                onChange(userImage);
            }
        };

        fileReader.readAsDataURL(userImage);
        onChange(null);
    };

    return (<>
        <label htmlFor={name} className={styles.imageContainer}>
            <img className={styles.previewImage} src={imageSrc} alt={'사용자 사진'}/>
            <span className={styles.hoverText}>변경</span>
        </label>
        <input className={styles.input} id={name} type={'file'} onChange={handleChangeUserImage}/>
    </>);
};

export default LabeledInputUserImage;

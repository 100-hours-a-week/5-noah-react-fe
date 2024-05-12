import {Link} from 'react-router-dom';

import styles from './styles.module.css';

const HeaderTitle = () => {
    return (<>
        <Link to={'/posts'} className={styles.titleText}>아무 말 대잔치</Link>
    </>);
};

export default HeaderTitle;

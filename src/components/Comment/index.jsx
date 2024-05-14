import styles from './styles.module.css';
import UserImage from '../UserImage';

const Comment = ({
                     authorImageSrc,
                     authorName,
                     createdDate,
                     content,
                 }) => {

    return (<div className={styles.container}>
        <div className={styles.topContainer}>
            <div className={styles.authorContainer}>
                <UserImage src={authorImageSrc} alt={'댓글 작성자 사진'} width={36} height={36}/>
                <span className={styles.authorName}>{authorName}</span>
                <span>{createdDate}</span>
            </div>
            <div>
                <button className={styles.button}>수정</button>
                <button className={styles.button}>삭제</button>
            </div>
        </div>
        <p className={styles.content}>{content}</p>
    </div>);
};

export default Comment;

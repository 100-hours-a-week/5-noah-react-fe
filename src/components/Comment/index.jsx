import styles from './styles.module.css';
import UserImage from '../UserImage';
import SmallButton from '../SmallButton';

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
                <SmallButton value={'수정'}/>
                <SmallButton value={'삭제'}/>
            </div>
        </div>
        <p className={styles.content}>{content}</p>
    </div>);
};

export default Comment;

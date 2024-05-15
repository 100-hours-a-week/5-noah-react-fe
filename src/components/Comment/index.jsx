import styles from './styles.module.css';
import UserImage from '../UserImage';
import SmallButton from '../SmallButton';
import {useState} from 'react';
import Modal from '../Modal';

const Comment = ({
                     authorImageSrc,
                     authorName,
                     createdDate,
                     content,
                 }) => {
    const [modal, setModal] = useState(false);

    const handleOpenModal = () => {
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    const handleDeleteComment = () => {
        console.log('댓글 삭제');

        // 나중에 fetch API 추가
        setModal(false);
    };

    return (<div className={styles.container}>
        <div className={styles.topContainer}>
            <div className={styles.authorContainer}>
                <UserImage src={authorImageSrc} alt={'댓글 작성자 사진'} width={36} height={36}/>
                <span className={styles.authorName}>{authorName}</span>
                <span>{createdDate}</span>
            </div>
            <div>
                <SmallButton value={'수정'}/>
                <SmallButton onClick={handleOpenModal} value={'삭제'}/>
            </div>
        </div>
        <p className={styles.content}>{content}</p>

        {modal && <Modal title={'댓글을 삭제하시겠습니까?'} content={'삭제한 내용은 복구할 수 없습니다.'} onCancel={handleCloseModal}
                         onConfirm={handleDeleteComment}/>}
    </div>);
};

export default Comment;

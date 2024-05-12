import styles from './styles.module.css';
import SimplePost from '../SimplePost';

const SimplePostContainer = () => {

    return (<div className={styles.simplePostContainer}>
        <p className={styles.simplePostContainerTitle}>안녕하세요,</p>
        <p className={styles.simplePostContainerTitle}>아무 말 대잔치 <b>게시판</b> 입니다.</p>
        <div className={styles.moveEditButtonContainer}>
            {/* 나중에 버튼 이벤트 처리 */}
            <button className={styles.moveEditButton}>게시글 작성</button>
        </div>
        {/* 나중에 반복문으로 처리 */}
        <SimplePost title={'test Title 1'} likes={1} comments={2} views={3} createdDate={'2021-01-01 00:00:01'}
                    authorImageSrc={'user-images/default-user-image.png'} authorName={'noah'}></SimplePost>
        <SimplePost title={'test Title 2'} likes={1000} comments={10000} views={100000}
                    createdDate={'2021-01-01 00:00:02'}
                    authorImageSrc={'user-images/default-user-image.png'} authorName={'noah'}></SimplePost>
        <SimplePost title={'test Title 3'} likes={10} comments={20} views={30}
                    createdDate={'2021-01-01 00:00:03'}
                    authorImageSrc={'user-images/default-user-image.png'} authorName={'noah'}></SimplePost>
        <SimplePost title={'test Title 4'} likes={100} comments={200} views={300}
                    createdDate={'2021-01-01 00:00:04'}
                    authorImageSrc={'user-images/default-user-image.png'} authorName={'noah'}></SimplePost>
        <SimplePost title={'test Title 5'} likes={400} comments={500} views={600}
                    createdDate={'2021-01-01 00:00:05'}
                    authorImageSrc={'user-images/default-user-image.png'} authorName={'noah'}></SimplePost>
    </div>);

};

export default SimplePostContainer;

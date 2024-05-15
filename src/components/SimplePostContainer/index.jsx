import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';
import SimplePost from '../SimplePost';
import MainContainer from '../MainContainer';
import MediumButton from '../MediumButton';

const SimplePostContainer = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/posts/create');
    };

    return (<MainContainer>
        <div className={styles.SimplePostWrap}>
            {/* 재사용 어렵다고 파단 */}
            <p className={styles.simplePostContainerTitle}>안녕하세요,</p>
            <p className={styles.simplePostContainerTitle}>아무 말 대잔치 <b>게시판</b> 입니다.</p>
            <div className={styles.moveEditButtonContainer}>
                <MediumButton value={'게시글 작성'} disable={false} onClick={handleClickButton}/>
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
        </div>
    </MainContainer>);
};

export default SimplePostContainer;

import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';
import SimplePost from '../SimplePost';
import MainContainer from '../MainContainer';
import MediumButton from '../MediumButton';
import {useEffect, useState} from 'react';

const SimplePostContainer = ({data}) => {
    const navigate = useNavigate();

    const [editPostButtonDisplay, setEditPostButtonDisplay] = useState('none');

    const handleClickButton = () => {
        navigate('/posts/create');
    };

    const simplePosts = JSON.parse(data);

    // TODO 지금 Page 컴포넌트에서 1번, 여기서 1번 2번의 인증을 거침, 나중에 Auth HOC 적용 시 수정
    useEffect(function checkAlreadySignIn() {
        fetch('http://localhost:8000/api/check-auth', {
            credentials: 'include',
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((body) => {
                        setEditPostButtonDisplay('inline');
                    });
                } else {
                    setEditPostButtonDisplay('none');
                }
            });
    }, []);

    return (<MainContainer>
        <div className={styles.SimplePostWrap}>
            <p className={styles.simplePostContainerTitle}>안녕하세요,</p>
            <p className={styles.simplePostContainerTitle}>아무 말 대잔치 <b>게시판</b> 입니다.</p>
            <div className={styles.moveEditButtonContainer}>
                <MediumButton value={'게시글 작성'} display={editPostButtonDisplay} onClick={handleClickButton}/>
            </div>
            {simplePosts && simplePosts.map((simplePost) => (<SimplePost
                key={simplePost.id}
                id={simplePost.id}
                title={simplePost.title}
                likes={simplePost.likes}
                comments={simplePost.comments}
                views={simplePost.views}
                createdDate={simplePost.createdDate}
                authorImageSrc={'http://localhost:8000/' + simplePost.author.imageUrl}
                authorName={simplePost.author.name}
            />))}
        </div>
    </MainContainer>);
};

export default SimplePostContainer;

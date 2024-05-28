import Header from '../../components/Header';
import Body from '../../components/Body';
import EditPostForm from '../../components/EditPostForm';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

const UpdatePostPage = () => {
    const {postId} = useParams();

    const navigate = useNavigate();

    const [userImageSrc, setUserImageSrc] = useState('');

    // 중복 코드
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8000/api/posts/${postId}`, {
            method: 'PATCH',
            body: new FormData(event.target),
            credentials: 'include',
        }).then((response) => {
            if (!response.ok) {
                alert('에러 발생!');
                navigate('/posts');
            }

            navigate(`/posts/${postId}`);
        });
    };

    // ! 중복 코드, 나중에 HOC로 빼기
    useEffect(function checkAlreadySignIn() {
        fetch('http://localhost:8000/api/check-auth', {
            credentials: 'include',
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((body) => {
                        setUserImageSrc(`http://localhost:8000/${body.imageUrl}`);
                    });
                } else {
                    navigate('/sign-in');
                }
            });
    }, [navigate]);

    return (<>
        <Header useBackButton={true} useUserImage={true} imageSrc={userImageSrc}></Header>
        <Body>
            {/* TODO 나중에 HOC로 변경 */}
            <EditPostForm postId={postId} bodyTitleText={'게시글 수정'} onSubmit={handleSubmit}></EditPostForm>
        </Body>
    </>);
};

export default UpdatePostPage;

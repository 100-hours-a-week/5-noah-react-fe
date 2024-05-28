import Header from '../../components/Header';
import Body from '../../components/Body';
import EditPostForm from '../../components/EditPostForm';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';

const CreatePostPage = () => {
    const navigate = useNavigate();

    const [useUserImage, setUseUserImage] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            body: new FormData(event.target),
            credentials: 'include',
        }).then((response) => {
            if (!response.ok) {
                alert('에러 발생!');
            }

            navigate('/posts');
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
                        setUseUserImage(true);
                        setImageSrc(`http://localhost:8000/${body.imageUrl}`);
                    });
                } else {
                    navigate('/sign-in');
                }
            });
    }, [navigate]);

    return (<>
        <Header useBackButton={true} useUserImage={useUserImage} imageSrc={imageSrc}></Header>
        <Body>
            <EditPostForm bodyTitleText={'게시글 작성'} onSubmit={handleSubmit}></EditPostForm>
        </Body>
    </>);
};

export default CreatePostPage;

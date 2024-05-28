import Header from '../../components/Header';
import PostContainer from '../../components/PostContainer';
import withLoading from '../../hoc/withLoading';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

const PostContainerWithLoading = withLoading(PostContainer);

const PostPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(function ifIsNotNumber() {
        if (isNaN(id)) {
            navigate('/posts');
        }
    }, [id, navigate]);

    const url = `http://localhost:8000/api/posts/${id}`;
    const options = {};

    const [useUserImage, setUseUserImage] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    // 나중에 HOC로 빼기
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
                    setUseUserImage(false);
                    setImageSrc('');
                }
            });
    }, []);

    return (<>
        <Header useBackButton={true} useUserImage={useUserImage} imageSrc={imageSrc}/>
        <PostContainerWithLoading url={url} options={options}/>
    </>);
};

export default PostPage;

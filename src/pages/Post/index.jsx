import Header from '../../components/Header';
import PostContainer from '../../components/PostContainer';
import withLoading from '../../hoc/withLoading';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';

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

    return (<>
        <Header useBackButton={true} useUserImage={true} imageSrc={'/user-images/default-user-image.png'}/>
        <PostContainerWithLoading url={url} options={options}/>
    </>);
};

export default PostPage;

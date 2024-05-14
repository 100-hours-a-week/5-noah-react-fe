import Header from '../../components/Header';
import PostContainer from '../../components/PostContainer';

const PostPage = () => {
    return (<>
        <Header useBackButton={true} useUserImage={true} imageSrc={'/user-images/default-user-image.png'}/>
        <PostContainer/>
    </>);
};

export default PostPage;

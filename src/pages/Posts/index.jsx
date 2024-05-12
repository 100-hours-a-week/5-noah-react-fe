import Header from '../../components/Header';
import Body from '../../components/Body';
import SimplePostContainer from '../../components/SimplePostContainer';

const PostsPage = () => {

    return (<>
        <Header useUserImage={true} imageSrc={'user-images/default-user-image.png'}></Header>
        <Body>
            <SimplePostContainer></SimplePostContainer>
        </Body>
    </>);
};

export default PostsPage;

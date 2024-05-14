import Header from '../../components/Header';
import Body from '../../components/Body';
import EditPostForm from '../../components/EditPostForm';

const CreatePostPage = () => {
    return (<>
        <Header useBackButton={true} useUserImage={true} imageSrc={'/user-images/default-user-image.png'}></Header>
        <Body>
            <EditPostForm bodyTitleText={'게시글 작성'}></EditPostForm>
        </Body>
    </>);
};

export default CreatePostPage;

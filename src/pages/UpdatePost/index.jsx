import Header from '../../components/Header';
import Body from '../../components/Body';
import EditPostForm from '../../components/EditPostForm';

const UpdatePostPage = () => {
    return (<>
        <Header useBackButton={true} useUserImage={true} imageSrc={'/user-images/default-user-image.png'}></Header>
        <Body>
            <EditPostForm bodyTitleText={'게시글 수정'}></EditPostForm>
        </Body>
    </>);
};

export default UpdatePostPage;

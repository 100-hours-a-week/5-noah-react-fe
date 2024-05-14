import Header from '../../components/Header';
import Body from '../../components/Body';
import UpdateUserProfileForm from '../../components/UpdateUserProfileForm';

const UpdateUserProfilePage = () => {
    return (<>
        <Header useUserImage={true} imageSrc={'/user-images/default-user-image.png'}></Header>
        <Body>
            <UpdateUserProfileForm></UpdateUserProfileForm>
        </Body>
    </>);
};

export default UpdateUserProfilePage;

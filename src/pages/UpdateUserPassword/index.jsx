import Header from '../../components/Header';
import Body from '../../components/Body';
import UpdateUserPasswordForm from '../../components/UpdateUserPasswordForm';

const UpdateUserPasswordPage = () => {
    return (<>
        <Header useUserImage={true} imageSrc={'/user-images/default-user-image.png'}></Header>
        <Body>
            <UpdateUserPasswordForm></UpdateUserPasswordForm>
        </Body>
    </>);
};

export default UpdateUserPasswordPage;

import Header from '../../components/Header';
import Body from '../../components/Body';
import UpdateUserPasswordForm from '../../components/UpdateUserPasswordForm';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const UpdateUserPasswordPage = () => {
    const navigate = useNavigate();

    const [userImageSrc, setUserImageSrc] = useState('');

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
        <Header useUserImage={true} imageSrc={userImageSrc}></Header>
        <Body>
            <UpdateUserPasswordForm></UpdateUserPasswordForm>
        </Body>
    </>);
};

export default UpdateUserPasswordPage;

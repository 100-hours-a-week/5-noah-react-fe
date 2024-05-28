import Header from '../../components/Header';
import Body from '../../components/Body';
import SimplePostContainer from '../../components/SimplePostContainer';
import withLoading from '../../hoc/withLoading';
import {useEffect, useState} from 'react';

const SimplePostContainerWithLoading = withLoading(SimplePostContainer);

const PostsPage = () => {
    const url = 'http://localhost:8000/api/posts';
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
        <Header useUserImage={useUserImage} imageSrc={imageSrc}></Header>
        <Body>
            <SimplePostContainerWithLoading url={url} options={options}/>
        </Body>
    </>);
};

export default PostsPage;

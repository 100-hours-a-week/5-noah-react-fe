import Header from '../../components/Header';
import Body from '../../components/Body';
import SimplePostContainer from '../../components/SimplePostContainer';
import withLoading from '../../hoc/withLoading';

const SimplePostContainerWithLoading = withLoading(SimplePostContainer);

const PostsPage = () => {
    const url = 'http://localhost:8000/api/posts';
    const options = {};

    return (<>
        <Header useUserImage={true} imageSrc={'/user-images/default-user-image.png'}></Header>
        <Body>
            <SimplePostContainerWithLoading url={url} options={options}/>
            {/*<SimplePostContainer></SimplePostContainer>*/}
        </Body>
    </>);
};

export default PostsPage;

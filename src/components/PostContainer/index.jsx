import styles from './styles.module.css';
import MainContainer from '../MainContainer';
import Post from '../Post';
import CommentContainer from '../CommentContainer';

const PostContainer = ({data}) => {

    const post = JSON.parse(data);

    return (<MainContainer>
        <div className={styles.postContainer}>
            {post && <Post id={post.id} postTitle={post.title}
                           authorImageSrc={`http://localhost:8000/${post.author.imageUrl}`}
                           authorName={post.author.name}
                           createdDate={post.createdDate} postImageSrc={`http://localhost:8000/${post.imageUrl}`}
                           postContent={post.content}
                           views={post.views} comments={post.comments.count}></Post>}
            <CommentContainer/>
        </div>
    </MainContainer>);
};

export default PostContainer;

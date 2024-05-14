import styles from './styles.module.css';
import MainContainer from '../MainContainer';
import Post from '../Post';
import CommentContainer from '../CommentContainer';

const PostContainer = () => {
    return (<MainContainer>
        <div className={styles.postContainer}>
            <Post postTitle={'제목 1'} authorImageSrc={'/user-images/default-user-image.png'} authorName={'noah'}
                  createdDate={'2021-01-01 00:00:00'} postImageSrc={'/post-images/default-post-image1.webp'}
                  postContent={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque vel felis at scelerisque. Nulla volutpat vulputate mattis. Morbi ullamcorper, odio in pretium tincidunt, nunc nisi elementum nibh, a commodo elit metus quis lectus. Etiam gravida felis ut enim vehicula scelerisque. Nulla sagittis metus at turpis laoreet, quis molestie nisi suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu metus at nisi imperdiet vestibulum vel pharetra elit. In gravida leo quis elementum ullamcorper. In malesuada sit amet massa et cursus. Integer viverra gravida vulputate. Morbi mollis dui in cursus pharetra.'}
                  views={10000} comments={1000000}></Post>
            <CommentContainer/>
        </div>
    </MainContainer>);
};

export default PostContainer;

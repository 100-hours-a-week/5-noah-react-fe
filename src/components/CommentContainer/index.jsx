import styles from './styles.module.css';
import MediumButton from '../MediumButton';
import Comment from '../Comment';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const CommentContainer = ({postId}) => {
    const navigate = useNavigate();

    const [commentFormDisplay, setCommentFormDisplayDisplay] = useState(true);

    const [nickname, setNickname] = useState('');

    const [comments, setComments] = useState([]);

    const [commentContent, setCommentContent] = useState('');

    const handleChangeCommentContent = (event) => {
        setCommentContent(event.target.value);
    };

    const handleClickCommentRegisterButton = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8000/api/posts/${postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: commentContent,
            }),
            credentials: 'include',
        }).then((response) => {
            if (response.ok) {
                navigate(`/posts/${postId}`);
            } else {
                alert('ERROR');
            }
        });
    };

    // 로그인하지 않으면 댓글 폼을 볼 수 없음
    useEffect(function updateButtonDisplay() {
        fetch('http://localhost:8000/api/check-auth', {
            credentials: 'include',
        })
            .then((response) => {
                if (response.ok) {
                    setCommentFormDisplayDisplay(true);

                    response.json().then((body) => {
                        setNickname(body.nickname);
                    });
                } else {
                    setCommentFormDisplayDisplay(false);
                }
            });

        fetch(`http://localhost:8000/api/posts/${postId}/comments`)
            .then((response) => {
                if (response.ok) {
                    response.json().then((body) => {
                        setComments(body.comments);
                    });
                }
            });
    }, [postId]);

    return (<div className={styles.commentContainer}>
        {commentFormDisplay && <form className={styles.createCommentForm} onChange={handleChangeCommentContent}>
            <textarea className={styles.textarea} placeholder={'댓글을 남겨주세요!'}/>
            <hr className={styles.horizontalRule}></hr>
            <div className={styles.createCommentFormSubmitButtonContainer}>
                <MediumButton value={'댓글 등록'} onClick={handleClickCommentRegisterButton}/>
            </div>
        </form>}
        <div className={styles.comments}>
            {comments.map((comment) => (<Comment
                key={comment.id}
                postId={postId}
                commentId={comment.id}
                authorImageSrc={`http://localhost:8000/${comment.author.imageUrl}`}
                authorName={comment.author.name}
                createdDate={comment.createdDate}
                content={comment.content}
                userNickname={nickname}
            />))}
        </div>
    </div>);
};

export default CommentContainer;

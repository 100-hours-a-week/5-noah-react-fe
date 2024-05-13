import styles from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import PostsPage from './pages/Posts';
import CreatePostPage from './pages/CreatePost';
import UpdatePostPage from './pages/UpdatePost';
import UpdateUserProfilePage from './pages/UpdateUserProfile';
import UpdateUserPasswordPage from './pages/UpdateUserPassword';

function App() {
    return (<div className={styles.App}>
        {/* TODO: body 안 컨테이너 분리 생각 */}
        {/* TODO: 일부 label 역할을 수행하는 <p> 태그들 Label로 변경 */}
        {/* TODO: 비밀번호 유효성 검사 추가 */}

        <Routes>
            <Route path={'/'} element={<SignInPage/>}/>
            <Route path={'/sign-in'} element={<SignInPage/>}/>
            <Route path={'/sign-up'} element={<SignUpPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/posts/create'} element={<CreatePostPage/>}/>
            <Route path={'/posts/update'} element={<UpdatePostPage/>}/>
            <Route path={'/users/update/profile'} element={<UpdateUserProfilePage/>}/>
            <Route path={'/users/update/password'} element={<UpdateUserPasswordPage/>}/>
        </Routes>
    </div>);
}

export default App;

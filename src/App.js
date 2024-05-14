import styles from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import PostsPage from './pages/Posts';
import PostPage from './pages/Post';
import CreatePostPage from './pages/CreatePost';
import UpdatePostPage from './pages/UpdatePost';
import UpdateUserProfilePage from './pages/UpdateUserProfile';
import UpdateUserPasswordPage from './pages/UpdateUserPassword';

function App() {
    return (<div className={styles.App}>
        <Routes>
            {/*<Route path={'/'} element={<SignInPage/>}/>*/}
            <Route path={'/sign-in'} element={<SignInPage/>}/>
            <Route path={'/sign-up'} element={<SignUpPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/posts/:id'} element={<PostPage/>}/>
            <Route path={'/posts/create'} element={<CreatePostPage/>}/>
            <Route path={'/posts/update'} element={<UpdatePostPage/>}/>
            <Route path={'/users/update/profile'} element={<UpdateUserProfilePage/>}/>
            <Route path={'/users/update/password'} element={<UpdateUserPasswordPage/>}/>
        </Routes>
    </div>);
}

export default App;

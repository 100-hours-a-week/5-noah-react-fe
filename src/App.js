import styles from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import PostsPage from './pages/Posts';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import UpdateUserProfilePage from './pages/UpdateUserProfile';
import UpdateUserPasswordPage from './pages/UpdateUserPassword';

function App() {
    return (<div className={styles.App}>
        {/* TODO: helperText 분리 가능하다 판단, 분리 */}
        {/* TODO: image preview 분리 가능하다 판단, 분리 */}
        {/* TODO: input 분리 가능하다 판단, 분리 */}
        {/* TODO: label 분리 가능하다 판단, 분리 */}
        {/* TODO: submit button 분리 가능하다 판단, 분리 */}

        <Routes>
            <Route path={'/'} element={<SignInPage/>}/>
            <Route path={'/sign-in'} element={<SignInPage/>}/>
            <Route path={'/sign-up'} element={<SignUpPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/posts/create'} element={<CreatePost/>}/>
            <Route path={'/posts/update'} element={<UpdatePost/>}/>
            <Route path={'/users/update/profile'} element={<UpdateUserProfilePage/>}/>
            <Route path={'/users/update/password'} element={<UpdateUserPasswordPage/>}/>
        </Routes>
    </div>);
}

export default App;

import styles from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import PostsPage from './pages/Posts';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';

function App() {
    return (<div className={styles.App}>

        <Routes>
            {/*<Route path={'/'} element={<SignInPage/>}/>*/}
            <Route path={'/sign-in'} element={<SignInPage/>}/>
            <Route path={'/sign-up'} element={<SignUpPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/posts/create'} element={<CreatePost/>}/>
            <Route path={'/posts/update'} element={<UpdatePost/>}/>
        </Routes>
    </div>);
}

export default App;

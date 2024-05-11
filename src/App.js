import './App.css';
import {Route, Routes} from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

function App() {
    return (<div className="App">
        {/* Routes 분리 안될까? */}
        <Routes>
            <Route path={'/'} element={<SignInPage/>}/>
            <Route path={'/sign-in'} element={<SignInPage/>}/>
            <Route path={'/sign-up'} element={<SignUpPage/>}/>
        </Routes>
    </div>);
}

export default App;

import './App.css';
import {Route, Routes} from 'react-router-dom';
import TestA from './pages/testA';
import TestB from './pages/testB';
import Posts from './pages/posts';
import Header from './components/Header';

function App() {
  return (<div className="App">
    {/*더 좋은 방법이 있을텐데..*/}
    <Header></Header>
    <Header useBackButton={true}></Header>
    <Header useBackButton={false} useUserImage={true} imageSrc={'/user-images/default-user-image.png'}></Header>
    <Header useBackButton={true} useUserImage={true} imageSrc={'/user-images/default-user-image.png'}></Header>

    {/* TODO: clear*/}
    <ul>
      <li><a href={'/a'}>Test A</a></li>
      <li><a href={'/b'}>Test B</a></li>
    </ul>

    {/* Routes 위치는 어떻게?*/}
    <Routes>
      <Route path={'/a'} element={<TestA/>}></Route>
      <Route path={'/b'} element={<TestB/>}></Route>
      <Route path={'/posts'} element={<Posts/>}></Route>
    </Routes>
  </div>);
}

export default App;

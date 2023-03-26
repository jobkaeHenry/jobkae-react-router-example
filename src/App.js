import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Page from './pages/Page';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      {/* Router를 중첩해 Navbar가 있는 컴포넌트를 만들어볼까요?*/}
      <Navbar />
      <Routes>

        {/* Navbar가 있는 컴포넌트를 만들어볼까요?*/}
        <Route>
          <Route path='/' element={<Main />} />
          {/* 라우팅을 동적으로 관리하고싶어요 "1" 대신 들어가야 할게 뭘까요?*/}
          <Route path='/page/1' element={<Page />} />
        </Route>

        {/* Navbar가 없는 컴포넌트를 만들어볼까요?*/}
        <Route>
          {/* 라우팅이 복잡한거 같아요 Router를 중첩해 보기좋게 관리해볼까요? */}
          <Route path='user/login' element={<Login />} />
          <Route path='user/logout' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

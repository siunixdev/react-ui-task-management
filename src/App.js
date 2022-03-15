import Sidebar from './layouts/Sidebar/Sidebar';
import Topbar from './layouts/Topbar/Topbar';
import Main from './layouts/Main/Main';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Topbar />
        <Main />
      </div>
    </div>
  );
}

export default App;

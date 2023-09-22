import './App.css';
import Articles from './components/Articles';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <div className='  bg-primary'>
        <header className=' container mx-auto py-4 text-white'>
          <h1 className=' text-[36px] text-center'> Skeleton Loading Design</h1>
        </header>
      </div>
      <div className=' container mx-auto'>
        <div className=' grid grid-cols-4 py-6'>
          <div className=' col-span-3 px-10'>
            <Articles/>
          </div>
          <div >
            <User/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

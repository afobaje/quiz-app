import Question from './components/Question'
import Category from './components/Category';
import { 
      Outlet, 
      Link 
    } from 'react-router-dom'
    


function App() {
  return (
    <div  className='flex  flex-col justify center w-fit md:container md:lg-1024 px-4 pt-4 m-6'>
      <header>
        <span>
          <h1 className='text-6xl'>Welcome to the quiz app. </h1>
          <h2 className='text-4xl ml-6 my-4'>Think you know it all?</h2>
          <h3 className='text-3xl ml-8 my-4'>Opt in</h3>
        </span>

      </header>
      
      
      {/* <Question quest='how does it feel for everything to work'/> */}
      <Link to='/Category' className='p-2 hover:font-mono content-center object-center self-center text-4xl mt-15  ml-8 bg-transparent border-2 outline-none hover:bg-teal-400 border-teal-400 w-64 h-14  ml-10 mt-6 justify-center text-4xl font-medium shadow-md' >GET STARTED</Link>
      <Outlet />
      {/* <footer className='mt-40' >Designed with love by <a href='twitter.com/afobaje_'>Afobaje</a></footer> */}
    </div>
  );
}

export default App;


// style={{backgroundColor:'red',width:'10em',height:'5em',fontWeight:'bold',textTransform:'uppercase',borderRadius:'5px',border:'blue',outline:'none',cursor:'pointer',color:'white'}}
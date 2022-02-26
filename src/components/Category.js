import React from 'react';
import axios from 'axios';
import { 
  Outlet,
  Link,
  Routes,
  Route,
  useNavigate,
  useParams
 } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Question from './Question';


const Category = () => {
  // let navigate=useNavigate();
  let [category,setCategory]=useState([]);
  let [loading,setLoading]=useState(true);
  let categories=`https://opentdb.com/api_category.php`;
  useEffect(() => {
    axios.get(categories)
   .then(
     res=>{
      
       setCategory(res.data.trivia_categories)
       setLoading(false)
       
     }
   )  
  }, [setCategory]);
  return (
    <div className='box-border p-6 grid clear-left absolute grid-cols-4 gap-14 '>
        {/* <p>{JSON.stringify(category)}</p> */}
        {
          loading ?<p className='text-4xl'>Loading..</p> : category.map((values,u)=>{
            return (
              
               
                 
                  <span key={u} className='p-4 shadow-md hover:bg-teal-400'>
                    <Link to={`/Question/${values.id}`} >{values.name}</Link>
                  </span>
                
              
            )
          })
        }
        {/* <Routes>
          <Route path='Category' element={<Category/>}>
            <Route path=':Category'/>
          </Route>
        </Routes> */}
      <Outlet/>  
    </div>
  );
};

export default Category;

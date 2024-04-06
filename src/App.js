// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar';
import TeForm from './components/TeForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
 
 
    function App() {
      const[mode,setMode]=useState('light') //weather dark mode is enable or not

      const [alert,setAlert]=useState(null)
      const showAlert=(message,type)=>{
        setAlert({
          msg:message,
        type:type        })

        setTimeout( ()=>{
        setAlert(null)
         },3000)


      }

const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
   


}

      const toggleMode = (cls) => {
removeBodyClasses()
        document.body.classList.add('bg-'+cls)
        if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor='#042743'
          showAlert("Dark mode enables","success")
          // document.title='TextUtils-Dark mode';

          // setInterval(() => {
          //   document.title="TextUtils is  Amazing Mode"
          // }, 2000);
          // setInterval(() => {
          //   document.title="Install TextUtils Now"
          // }, 1000);



        }
        else{
          setMode('light')
          document.body.style.backgroundColor='white'
          showAlert("light mode enables","success")
          // document.write='TextUtils-lightMode'
        }
      }


      return (
        <> 
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
       <div className="class container my-3"> 
      <BrowserRouter>
           <Routes>

                 <Route path="/" />
                <Route path="/teform" element={<TeForm  showAlert={showAlert} heading=" Try-TetUtils --Word counter and character counter and remove etra spaces " mode={mode}/> }/>

                <Route path="/about" element={<About mode={mode}/>} /> 
            </Routes>


      </BrowserRouter>


        {/* <TeForm  showAlert={showAlert} heading="Enter the  tet to analyze " mode={mode}/> */}
        {/* <About/> */}
        </div>
       

        
     </>
     
       );
    }
 

export default App;

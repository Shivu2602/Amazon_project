// Write an "rafce" then automatically  adding the function and export default
// This is a meaning of "rafce" is "React functional component with arrow function and export default"


import './App.css';
import Navbar from './component/navbar/Navbar';
import SubNav from './component/subnavbar/SubNav';
import Mainindex from './component/mainpage/Mainindex';
import Footer from './component/footer/Footer';
import Signin from './component/signinsingup/Signin';
import Signup from './component/signinsingup/Signup';
// import Cart from './component/cart/Cart';
import { Routes, Route } from "react-router-dom";


function App() {
  return(
    <>
    {/* Componet always start with Capital letter */}
    <Navbar /> 
    <SubNav />
    <Routes>
        <Route path="/" element={<Mainindex />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/Cart" element={<Cart />} /> */}
      </Routes>
    <Footer />
    </>
  );




  // const MainValue = Navbar(() => {
  //   return (
  //     <>
  //       <Navbar />
  //     </>
  //   )
  // })


  // const SubNavBars = SubNav(() => {
  //   return (
  //     <>
  //       <SubNav />
  //     </>
  //   )
  // })

  // const Indexmain = Mainindex(() => {
  //   return (
  //     <>
  //       <Mainindex />
  //     </>
  //   )
  // })

  // const Mainfooter = Footer(() => {
  //   return (
  //     <>
  //       <Footer />
  //     </>
  //   )
  // })

  // const Mainsign = Signin(() => {
  //   return (
  //     <>
  //       <Signin />
  //     </>
  //   )
  // })


  // const Mainsignup = Signup(() => {
  //   return (
  //     <>
  //       <Signup />
  //     </>
  //   )
  // })


  // const Calling = Routes(() => {
  //   return (
  //     <Routes>
  //       <Route path="/" element={Indexmain} />
  //       <Route path='/login' element={<Signin />} />
  //       <Route path='/signup' element={<Signup />} />
  //     </Routes>
  //   );
  // });

  // return (
  //   <>
  //     {MainValue}
  //     {SubNavBars}
  //     {Calling}
  //     {Mainfooter}
  //   </>

  // );

}


export default App;



// Componet always start with Capital letter
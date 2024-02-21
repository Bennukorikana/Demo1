
// import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
// import FooterComponent from './Components/FooterComponent';
// import HeaderComponent from './Components/HeaderComponent';
// import ListEmployeeComponent from './Components/ListEmployeeComponent'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// function App() {
// 	return (
// 		<div>
// 			<Router>
// 				<HeaderComponent />
// 				<div className="container">
					
// 					<Routes>
// 							<Route exact path='/' element={<ListEmployeeComponent />} />
// 							<Route path='/employees' element={<ListEmployeeComponent />} />
// 							<Route path='/add-employee' element={<CreateEmployeeComponent />} />
// 						</Routes>


// 				</div>
// 				<FooterComponent />
// 			</Router>

// 		</div>
// 	);
// }
// export default App;

import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
function App() {

  return (
    <div>
     <Router>
      <HeaderComponent/>
      <div className="container">
        <Routes>
            <Route exact path="/" element={<ListEmployeeComponent/>}></Route>
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
            <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
        </Routes>
      </div>

      <FooterComponent/>
    
    </Router> 

    </div>
  );
}
export default App
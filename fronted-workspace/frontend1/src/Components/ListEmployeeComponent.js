// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService';
// export default class ListEmployeeComponent extends Component {
//  constructor(props)
//  {
//     super(props);
//     this.state={
//         employee:[]
//     }
//  }
//  componentDidMount(){
//     EmployeeService.getEmployees().then((res)=>
// {
//     this.setState({employees:res.data})
// })
// }
//     render() {
//     return (
//       <div>
//         <h2 className='text-center'>employee list</h2>
//         <div className='row'>
//             <table className='table table-striped table-bordered'>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>firstname</th>
//                         <th>lastname</th>
//                         <th>Email</th>
//                         <th>action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         this.state.employee.map(
//                             employee=>
//                             <tr key={employee.id}>
//                      <td>{employee.firstname}</td>
//                     <td>{employee.lastname}</td>
//                     <td>{employee.email}</td>
//                     </tr>

//                         )
//                     }


//                 </tbody>
//             </table>
//         </div>
//       </div>
//     )
//   }
// }
import React, { useState, useEffect } from 'react';

const ListEmployeeComponent = () => {
  const [input, setInput] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInput(data);
      });
  }, []);
  return (
    <div>

      {/* <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>title</th>
                <th>price</th>
                <th>category</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
          {input.map((each)=>(
             <tr>
                 <td>{each.id}</td>
              <td>{each.title}</td>
                 <td>{each.price}</td>
                 <td>{each.category}</td>
                <td> 
                    <button className='button-primary' >delete</button>
                    <button className='button-primary'>update</button>
                    <button className='button-primary'>view</button>
            </td>
            </tr>))
             } 
       </tbody>
       </table> */}
      {input.map((each) => (
        <div className="card" style={{width: 200} } key={each.id}>
          <img className="card-img-top " src={each.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{each.title}</h5>
              {/* <p class="card-text">{each.description}</p> */}
              <p className="card-text">{each.price}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ListEmployeeComponent;

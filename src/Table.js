import axios from 'axios';
import React, { Component } from 'react'
import "./Table.css"
class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id:1,hoten:"",email:"",sdt:"",noidung:""},
      ],
    }
  }
  componentDidMount(){
    axios({
        method: "GET",
        url: 'http://localhost:8080/getlist',
        data: null,
      }).then((res)=>{this.setState({students:res.data})}).catch((err) => {
        console.log(err);
      });
  }
  renderTableData() {
    return this.state.students.map((student, index) => {
      const {id, hoten,email,sdt,noidung } = student
      return (
        <tr key={id}>
          <td>{hoten}</td>
          <td>{email}</td>
          <td>{sdt}</td>
          <td>{noidung}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
      const ob = Object.keys(this.state.students[0]);
      delete ob[0]
    const header =ob
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
        <div>
        <h1 id='title'>Table</h1>
        <table id='students'>
           <thead>{this.renderTableHeader()}</thead>
           <tbody>{this.renderTableData()}</tbody>
        </table>
     </div>
    )
  }
}

export default Tables
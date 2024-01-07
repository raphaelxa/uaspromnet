import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: 
                this.state.users.
                filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            if(res.data==null)
            {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">
                     Laporan Keuangan Dinamik 18</h2>
                 <div className = "row">
                    <button className="btn btn-primary"
                     onClick={this.addUser}> Tambahkan Data</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className 
                        = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Receiver</th>
                                    <th>JK</th>
                                    <th>No Telp</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                            <td>
                                                {user.date}
                                            </td>
                                            <td>
                                                {user.description}
                                            </td>
                                            <td>
                                                {user.amount}
                                            </td>
                                            <td>
                                                {user.status}
                                            </td>
                                            <td>
                                                {user.receiver}
                                            </td>
                                            <td>
                                                {user.jk}
                                            </td>
                                            <td>
                                                {user.no_telp}
                                            </td>
                                            <td>
                                                {user.address}
                                            </td>
                                             <td>
                      <button onClick={ () => 
                          this.editUser(user.id)} 
                               className="btn btn-info">Update 
                                 </button>
                       <button style={{marginLeft: "10px"}}
                          onClick={ () => this.deleteUser(user.id)} 
                             className="btn btn-danger">Delete 
                                 </button>
                       <button style={{marginLeft: "10px"}} 
                           onClick={ () => this.viewUser(user.id)}
                              className="btn btn-info">View 
                                  </button>
                                    </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
                 <div><br /><br /><br /><br /></div>
            </div>
        )
    }
}

export default ListUserComponent

import React, { Component } from "react";
import UserService from "../services/UserService";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {
        date: "",
        description: "",
        amount: "",
        status: "",
        receiver: "",
        jk: "",
        no_telp: "",
        address: "",
      },
    };

    this.changeDate = this.changeDate.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeReceiver = this.changeReceiver.bind(this);
    this.changeJk = this.changeJk.bind(this);
    this.changeNo_Telp = this.changeNo_Telp.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }

  componentDidMount() {
    if (this.state.id !== "_add") {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          user: {
            date: user.date,
            description: user.description,
            amount: user.amount,
            status: user.status,
            receiver: user.receiver,
            jk: user.jk,
            no_telp: user.no_telp,
            address: user.address,
          },
        });
      });
    }
  }

  saveOrUpdateUser = (e) => {
    e.preventDefault();

    if (this.state.id === "_add") {
      UserService.createUser(this.state.user).then((res) => {
        this.props.history.push("/users");
      });
    } else {
      UserService.updateUser(this.state.user, this.state.id).then((res) => {
        this.props.history.push("/users");
      });
    }
  };

  changeDate = (event) => {
    this.setState({
      user: { ...this.state.user, date: event.target.value },
    });
  };

  changeDescription = (event) => {
    this.setState({
      user: { ...this.state.user, description: event.target.value },
    });
  };

  changeAmount = (event) => {
    this.setState({
      user: { ...this.state.user, amount: event.target.value },
    });
  };

  changeStatus = (event) => {
    this.setState({
      user: { ...this.state.user, status: event.target.value },
    });
  };

  changeReceiver = (event) => {
    this.setState({
      user: { ...this.state.user, receiver: event.target.value },
    });
  };

  changeJk = (event) => {
    this.setState({
      user: { ...this.state.user, jk: event.target.value },
    });
  };

  changeNo_Telp = (event) => {
    this.setState({
      user: { ...this.state.user, no_telp: event.target.value },
    });
  };

  changeAddress = (event) => {
    this.setState({
      user: { ...this.state.user, address: event.target.value },
    });
  };

  cancel = () => {
    this.props.history.push("/users");
  };

  getTitle() {
    return this.state.id === "_add" ? (
      <h3 className="text-center">Tambahkan Data</h3>
    ) : (
      <h3 className="text-center">Update User</h3>
    );
  }

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Date: </label>
                    <input
                      type="date"
                      placeholder="Tanggal"
                      name="date"
                      className="form-control"
                      value={this.state.user.date}
                      onChange={this.changeDate}
                    />
                  </div>
                  <div className="form-group">
                    <label> Deskripsi: </label>
                    <input
                      placeholder="Deskripsi"
                      name="description"
                      className="form-control"
                      value={this.state.user.description}
                      onChange={this.changeDescription}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jumlah: </label>
                    <input
                      placeholder="Jumlah"
                      name="amount"
                      className="form-control"
                      value={this.state.user.amount}
                      onChange={this.changeAmount}
                    />
                  </div>
                  <div className="form-group">
                    <label> Status: </label>
                    <input
                      placeholder="Status"
                      name="status"
                      className="form-control"
                      value={this.state.user.status}
                      onChange={this.changeStatus}
                    />
                  </div>
                  <div className="form-group">
                    <label> Penerima: </label>
                    <input
                      placeholder="Penerima"
                      name="receiver"
                      className="form-control"
                      value={this.state.user.receiver}
                      onChange={this.changeReceiver}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jenis Kelamin: </label>
                    <select
                      name="jk"
                      className="form-control"
                      value={this.state.user.jk}
                      onChange={this.changeJk}
                    >
                      <option value="l">Laki-Laki</option>
                      <option value="p">Perempuan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> No. Telp: </label>
                    <input
                      placeholder="No. Telp"
                      name="no_telp"
                      className="form-control"
                      value={this.state.user.no_telp}
                      onChange={this.changeNo_Telp}
                    />
                  </div>
                  <div className="form-group">
                    <label> Alamat: </label>
                    <input
                      placeholder="Alamat"
                      name="address"
                      className="form-control"
                      value={this.state.user.address}
                      onChange={this.changeAddress}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                  >
                    Simpan
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Batal
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div><br /><br /><br /></div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;

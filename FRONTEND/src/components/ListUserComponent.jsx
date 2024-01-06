import React, { Component } from "react";
import UserService from "../services/UserService";

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  }

  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data === null || res.data.length === 0) {
        this.props.history.push("/add-user/_add");
      } else {
        this.setState({ users: res.data });
      }
    });
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center pt-5" style={{ fontWeight: 'bold', fontSize: '50px' }}>List of Items</h2>
        <div className="row">
          <button className="btn btn-secondary" onClick={this.addUser}>
            Add Item
          </button>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead className="text-center thead-custom" style={{ backgroundColor: '#000080', color: 'white', fontSize: '18px'}}>
              <tr>
                <th>Nama Barang</th>
                <th>Jumlah</th>
                <th>Harga Satuan</th>
                <th>Lokasi</th>
                <th>Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td className="text-center" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                    <div>{user.nama_barang}</div>
                  </td>
                  <td className="text-center" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                    <div>{user.jumlah}</div>
                  </td>
                  <td className="text-center" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                    <div>{user.harga_satuan}</div>
                  </td>
                  <td className="text-center" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                    <div>{user.lokasi}</div>
                  </td>
                  <td className="text-center" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                    <div>{user.deskripsi}</div>
                  </td>
                  <td>
                    <button
                      onClick={() => this.editUser(user.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => this.deleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => this.viewUser(user.id)}
                      className="btn btn-primary"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;

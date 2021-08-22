import './FormSend.css'
import React, { Component } from 'react'
import axios from 'axios'

export class FormSend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hoten: "",
            email: "",
            sdt: "",
            noidung: "",
        }
    }
    handleSubmitForm(event) {
        console.log(this.state)
        axios({
            method: "POST",
            url: 'http://localhost:8080/send',
            data: this.state,
          }).then((res)=>{alert("Thêm thành công")}).catch((err) => {
            alert("Error");
          });
        event.preventDefault();
    }
    handleChangeHoTen(event) {
        var value = event.target.value;
     
        this.setState({
          hoten: value
        });
      }
      handleChangeEmail(event) {
        var value = event.target.value;
     
        this.setState({
          email: value
        });
      }
      handleChangeSDT(event) {
        var value = event.target.value;
     
        this.setState({
          sdt: value
        });
      }
      handleChangeNoiDung(event) {
        var value = event.target.value;
     
        this.setState({
          noidung: value
        });
      }
    render() {
        return (
            <form class="form" onSubmit={event => this.handleSubmitForm(event)}>
                <h2 className="title">Liên hệ</h2>
                <br />
                <input type="text" placeholder="Họ tên" value={this.state.hoten} onChange={event => this.handleChangeHoTen(event)} />
                <br />
                <input type="email" placeholder="Email" value={this.state.email} onChange={event => this.handleChangeEmail(event)} />
                <br />
                <input type="tel" placeholder="Số điện thoại" value={this.state.sdt}  onChange={event => this.handleChangeSDT(event)}/>
                <br />
                <div class="noidung">
                    <textarea name="Nội dung" id="Nội dung" rows="10" cols="52" placeholder="Nội dung" value={this.state.noidung} onChange={event => this.handleChangeNoiDung(event)}></textarea>
                </div>
                <br />
                <div class="button">
                    <input class="button1" type="button" onclick="alert('Gửi thành công')" value="Gửi"  type="submit" />
                </div>
            </form>
        )
    }
}

export default FormSend

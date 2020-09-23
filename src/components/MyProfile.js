import React, { Component } from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "Your name",
    gender: "Male",
    des:"Description about yourself",
    checked: false,
  }
  handleFiledChange = (position,event) => {
    this.setState({
      [position]: event.target.value,
    });
  }
  handleCheckedChange = (event) => {
    this.setState({
      checked: event.target.checked,
    });
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(
      "name:",this.state.name,
      "gender:",this.state.gender,
      "desvription:",this.state.des,
      "checked:",this.state.checked
    )
  }
  render() {
    return (
      <main>
        <h1>My Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text"
              value={this.state.name}
              onChange={e => this.handleFiledChange("name", e)}
            />
          </div>
          <div>
            <label>Gender</label>
            <input type="text" list="typelist" 
            value={this.state.gender}
            onChange={e => this.handleFiledChange("gender", e)} />
            <datalist id="typelist">
              <option>Male</option>
              <option>Female</option>
            </datalist>
          </div>
          <div>
            <label>Description</label>
            <textarea className="description"
            value={this.state.des}
            onChange={e => this.handleFiledChange("des", e)} 
            />
          </div>
          <div>
            <input className="have_read" type="checkbox" 
            checked={this.state.checked}
            onChange={this.handleCheckedChange} 
            />
            <label>I have read the terms of conduct</label>
          </div>
          <input type="submit" value="Submit" 
          disabled={!this.state.name || !this.state.des}
          className="submit_button"
          />
        </form>
      </main>

    );
  }
}

export default MyProfile;



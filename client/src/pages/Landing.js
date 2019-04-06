import React, { Component } from 'react';
import Footer from "../components/Footer";
import Title from '../components/Title';
import Form from '../components/Form';
import '../sass/colors.scss';

class Home extends Component {
  state = {
    userName: '',
    password: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <Title />
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            userName={this.state.userName}
            password={this.state.password}
          />
        </div>
        <Footer />
      </div>
      
    );
  }
}

export default Home;

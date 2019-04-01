import React, { Component } from 'react';
import Title from '../components/Title';
import Form from '../components/Form';
// import Footer from '../components/Footer';
// import API from '../utils/API';
// import { Col, Row, Container } from '../components/Grid';

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
        <div className='row'>
          <div className='col-md-12'>
            <h1> Log-in/Sign up</h1>
          </div>
          <div className='col-md-12'>
            <Form
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              userName={this.state.userName}
              password={this.state.password}
            />
          </div>
          <div className='col-md-12'>
            <Title>
              <h1 className='text-center'>
                <strong>Caption This!</strong>
              </h1>
              <h2 className='text-center'>
                Caption This! is a fun, interactive application in which users
                can express their creativity and create and share captions for
                photos.
              </h2>
            </Title>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

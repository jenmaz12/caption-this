import React, { Component } from 'react';
import Title from '../components/Title';
import Form from '../components/Form';
import '../sass/colors.scss';
// import Footer from '../components/Footer';
// import API from '../utils/API';
// import { Col, Row, Container } from '../components/Grid';

// const divStyle = {
//   'font-family': "'Quattrocento', serif",
//   'font-weight': 'bold',
//   color: '#061323',
// };

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
          <Title>
            <h1 className='text-center'>
              <strong>Caption This!</strong>
            </h1>
            <h2 className='text-center'>
              Caption This! is a fun, interactive application in which users can
              express their creativity and create and share captions for photos.
            </h2>
          </Title>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            userName={this.state.userName}
            password={this.state.password}
          />
        </div>
      </div>
    );
  }
}

export default Home;

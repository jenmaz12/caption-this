import React, { Component } from 'react';
import API from '../utils/API';
import ImageCards from '../components/ImageCards';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

class Images extends Component {
  state = {
    newCaption: '',
    results: [],
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    API.getBooks()
      .then(res => {
        this.setState({
          results: res.data,
        });
      })
      .catch(err => console.log(err));
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
    // POST function
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.results.map(image => (
            <Link to={'/images/'}>
              <ImageCards
                key={image._id}
                src={image.src}
                id={image._id}
                recentCaption={image.captions}
              />
            </Link>
          ))}
          {this.state.results.map(image => (
            <Modal
              src={image.src}
              imgID={image._id}
              key={image._id}
              onClick={this.handleFormSubmit}
              onChange={this.handleInputChange}
              value={this.state.newCaption}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Images;

// <Link to={"/images/" + image._id}>   This is the original line from the class example

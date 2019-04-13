import React, { Component } from 'react';
import API from '../utils/API';
import Footer from '../components/Footer';
import ImageCards from '../components/ImageCards';
import Modal from '../components/Modal';
// import { Link } from 'react-router-dom';
import Nav from '../components/NavBar';
// import firebase from 'firebase';

class Images extends Component {
  state = {
    newCaption: '',
    results: [],
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    API.getImages()
      .then(res => res.data)
      .then(result => {
        this.setState({
          isLoaded: true,
          results: result,
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

    const currentImage = event.target.dataset.imgid;
    const currentCaptions = [];
    const addedCaption = {
      body: this.state.newCaption,
      date: new Date(Date.now()),
    };
    console.log(currentImage);
    API.getCaption(currentImage)
      .then(res => res.data)
      .then(result => {
        console.log(result);
        for (let i = 0; i < result.captions.length; i++) {
          currentCaptions.push(result.captions[i]);
        }
        currentCaptions.push(addedCaption);
        console.log(currentCaptions);
        API.savedCaption(currentImage, { captions: currentCaptions })
          .then(res => res.data)
          .then(result => {
            console.log('imgID' + currentImage);
          });
        document.getElementById('form' + currentImage).reset();
        window.location = '/images';
      });
  };
  // signOut = () => {
  //   firebase.auth().signOut();
  //   this.setState({ isSignedIn: false });
  //   window.location = '/';
  // };

  render() {
    return (
      <div className='container-fluid p-0'>
        <Nav onClick={this.props.signOut} />
        <div className='row justify-content-center'>
          {this.state.results.map(image => (
            <ImageCards
              key={image._id}
              src={image.src}
              id={image._id}
              recentCaption={image.captions}
            />
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
        {/* <span>
          <button onClick={() => this.signOut()}>Sign out</button>
        </span> */}
      </div>
    );
  }
}

export default Images;

// <Link to={"/images/" + image._id}>   This is the original line from the class example

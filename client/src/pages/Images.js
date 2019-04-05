import React, { Component } from 'react';
import API from '../utils/API';
import ImageCards from '../components/ImageCards';
import Modal from '../components/Modal';

class Images extends Component {
  state = {
    results: [
      // {
      //   _id: '2',
      //   src: 'https://i.imgflip.com/tgniv.jpg',
      //   captions: [{ body: 'test', date: new Date(Date.now) }],
      // },
    ],
  };

  componentDidMount() {
    console.log('componentDidMount in Images.js');
    this.getImages();
  }

  getImages = () => {
    console.log('getImages in Images.js');
    API.getDataFromDb()
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.results.map(image => (
            <ImageCards
              src={image.src}
              id={image._id}
              recentCaption={image.captions}
            />
          ))}
          {this.state.results.map(image => (
            <Modal src={image.src} imgID={image._id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Images;

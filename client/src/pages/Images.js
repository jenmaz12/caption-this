import React, { Component } from 'react';
import API from '../utils/API';
import ImageCards from '../components/ImageCards';
import Modal from '../components/Modal';
import { Link } from "react-router-dom";


class Images extends Component {
  state = {
    results: [
      // {
      //   _id: '2',
      //   src: 'https://i.ytimg.com/vi/yV_wA62bbtk/maxresdefault.jpg',
      //   captions: [{ body: 'test', date: new Date(Date.now) }],
      // },
      // {
      //   _id: '3',
      //   src:
      //     'http://www.henspark.com/wp-content/uploads/2018/01/Success-Kid-Meme.jpg',
      //   captions: [{ body: 'test', date: new Date(Date.now) }],
      // },
      // {
      //   _id: '4',
      //   src:
      //     'https://i.pinimg.com/originals/98/d0/fb/98d0fbdc67201addb408ddf75e41f4a7.jpg',
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
    API.getBooks()
      .then(res => {
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
<<<<<<< HEAD
            // <Link to={"/images/" + image._id}>   This is the original line from the class example
            <Link to={"/images/"}>
              <ImageCards
                key={image._id}
                src={image.src}
                id={image._id}
                recentCaption={image.captions}
              />
            </Link>
          ))}
          {this.state.results.map(image => (
            <Modal src={image.src} imgID={image._id} key={image._id}/>
=======
            <ImageCards
              key={image._id}
              src={image.src}
              id={image._id}
              recentCaption={image.captions}
            />
          ))}
          {this.state.results.map(image => (
            <Modal src={image.src} imgID={image._id} key={image._id} />
>>>>>>> master
          ))}
        </div>
      </div>
    );
  }
}

export default Images;

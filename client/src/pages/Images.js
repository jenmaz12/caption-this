import React, { Component } from 'react';
import API from '../utils/API';
import Footer from "../components/Footer";
import ImageCards from '../components/ImageCards';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

class Images extends Component {
  state = {
<<<<<<< Updated upstream
    newCaption: '',
    results: [],
=======
    results: [
      {
        _id: '2',
        src: 'https://i.ytimg.com/vi/yV_wA62bbtk/maxresdefault.jpg',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '3',
        src:
          'http://www.henspark.com/wp-content/uploads/2018/01/Success-Kid-Meme.jpg',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '4',
        src:
          'https://i.pinimg.com/originals/98/d0/fb/98d0fbdc67201addb408ddf75e41f4a7.jpg',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '5',
        src:
          'https://upload.wikimedia.org/wikipedia/commons/5/55/Faceball_Action_Shot.jpg',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '6',
        src:
          'https://pixel.nymag.com/imgs/daily/vulture/2012/10/05/05-americas-funniest-home-videos-park.jpg',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '7',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWUlepf8rJYNysmKzI6eKMIEf-339ZJrb-JvIpRNrh7MZAMRqjA',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '8',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL1FkW0FHMIDFxLpb5-KMyboB4knixWdkyhYIjR9XYEsbISIw',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '9',
        src:
          'https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2017/09/frenchieactionshot.jpg?resize=750%2C501&ssl=1',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '10',
        src:
          'https://static.wixstatic.com/media/6b0132_c4986846816b4f41b6ddc811b67b04e0~mv2.png/v1/fill/w_1600,h_868,al_c,q_90/file.jpg',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '10',
        src:
          'https://www.clydefitchreport.com/wp-content/uploads/2016/04/cptpicardmeme-1.jpg',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '10',
        src:
          'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FQFeJgQBO4ZIGALw23Ru5NYs72X8%3D%2F0x0%3A3600x2400%2F1200x800%2Ffilters%3Afocal(1254x752%3A1830x1328)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F49605955%2Fsilicon_20valley_20season_203_20episode_204_20feature_20image.0.jpeg',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
      {
        _id: '10',
        src:
          'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fcurious-puppy-lying-on-the-floor-and-looking-at-royalty-free-image-538354162-1546530956.jpg',
        captions: [{ body: 'test', date: new Date(Date.now) }],
      },
    ],
>>>>>>> Stashed changes
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
      <div className='row justify-content-center'>
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
<<<<<<< Updated upstream
            <Modal
              src={image.src}
              imgID={image._id}
              key={image._id}
              onClick={this.handleFormSubmit}
              onChange={this.handleInputChange}
              value={this.state.newCaption}
=======
            <Modal 
            src={image.src} 
            imgID={image._id} 
            key={image._id}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
>>>>>>> Stashed changes
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
    );
  }
}

export default Images;

// <Link to={"/images/" + image._id}>   This is the original line from the class example

import React, { Component } from 'react';
import API from '../utils/API';
import ImageCards from '../components/ImageCards';

class Images extends Component {
  state = { results: [] };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    API.getDataFromDb()
      .then(res =>
        this.setState({
          results: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.results.map(image => (
            <ImageCards
              src={image.src}
              id={image.id}
              recentCaption={image.captions}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Images;

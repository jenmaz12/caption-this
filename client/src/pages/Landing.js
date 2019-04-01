import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Button from 'react-bootstrap/Button';

class Home extends Component {
  state = {
    userName: "",
    password: ""

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
  };
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1> Log-in/Sign up</h1>
          </Col>
          <Col size="md-12">
            <Form
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              userName={this.state.userName}
              password={this.state.password}
            />
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Caption This!</strong>
              </h1>
              <h2 className="text-center">Caption This! is....</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;

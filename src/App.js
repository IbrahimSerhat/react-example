import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = {
    currentCategory: "",
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List", anotherThing: "Thing" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                info={categoryInfo}
                changeCategory={this.changeCategory}
              />
            </Col>
            <Col xs="9">
              <ProductList
                info={productInfo}
                currentCategory={this.state.currentCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

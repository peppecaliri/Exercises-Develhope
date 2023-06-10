import React from "react";
import Card from "./Card";

class Store extends React.Component {
  state = {
    items: [],
  };

  fetchData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((arr) =>
        this.setState({
          items: arr,
        })
      );
  }

  componentDidMount() {
    this.fetchData("https://fakestoreapi.com/products");
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="flex flex-wrap m-8 gap-4">
        {this.state.items.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    );
  }
}

export default Store;

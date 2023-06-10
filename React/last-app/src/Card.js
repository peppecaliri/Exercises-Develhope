import React from "react";

class Card extends React.Component {
  render() {
    const { title, price, description } = this.props;
    return (
      <div className="border-2 border-black rounded w-72 h-96 flex flex-col justify-center items-center">
        <h1 className="border-b-2 border-indigo-300">{title}</h1>
        <h3 className="border-b-2 border-red-300">{price}</h3>
        <h4 className="w-full">{description}</h4>
      </div>
    );
  }
}

export default Card;

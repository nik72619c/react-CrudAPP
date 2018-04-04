import React, { Component } from "react";

export class Item extends Component {
  constructor(props) {
    super(props);
  }

  // markForDelete(event){

  //    this.item.isRed=!this.item.isRed;
  //    this.setState({item:this.item});
  //    if(this.state.item.isRed){

  //    event.target.parentElement.parentElement.setAttribute("class","red");
  //    }

  //    else{

  //     event.target.parentElement.parentElement.setAttribute("class","blue");
  //    }

  // }
red(){
    this.props.markForDelete(this.props.item.id);
}
  render() {
    console.log("item component rendered...", this.props.item.isRed);
    return (
      // <div
      //   key={this.props.item.id}
      //   className={this.props.item.isRed ? "red" : ""}
      // >
      //   <div>id : {this.props.item.id}</div>
      //   <br />
      //   <div>name : {this.props.item.name}</div>
      //   <br />
      //   <div>price : {this.props.item.price}</div>
      //   <br />
      //   <div>url : {this.props.item.url}</div>
      //   <br />
      //   <div>
      //     <img
      //       src="https://image.flaticon.com/icons/png/128/121/121113.png"
      //       onClick={this.red.bind(this)}
      //     />
      //   </div>
      //   <br />
      //   <br />
      // </div>
      <tr className={this.props.item.isRed ? "red" : ""}>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.name}</td>
        <td className="image"><img src={this.props.item.url}/></td>
        <td>{this.props.item.price}</td>
        <td className="image"><img src="https://image.flaticon.com/icons/png/128/121/121113.png" onClick={this.red.bind(this)}/></td>
      </tr>
    );
  }
}

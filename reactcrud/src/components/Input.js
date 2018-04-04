import React from 'react';
import {Component} from 'react';
import {Output} from './Output';
export class Input extends Component{

    constructor(props){

        super(props);
        this.itemList=[];
        this.state={itemList:this.itemList};
    }

    addItem(){

        var itemObject={};
        itemObject.id=this.refs.id.value;
        itemObject.name=this.refs.name.value;
        itemObject.url=this.refs.url.value;
        itemObject.price=this.refs.price.value;
        itemObject.isRed=false;
        this.itemList.push(itemObject);
        this.setState({itemList:this.itemList});
    }

    deleteItem(){
        let temparray=[];
         temparray = this.state.itemList.filter((item)=>!item.isRed);
         this.itemList = temparray;
         this.setState({
             itemList:this.itemList
         })   
    }

    markForDelete(object){
      let temparray = this.state.itemList;
        temparray.forEach((item)=>{
            if(item.id == object){
                item.isRed = !item.isRed;
            }
        })
        this.itemList = temparray
        this.setState({
            itemList:this.itemList
        })
    }
    render(){

        console.log("render called");
        return (

            <div>
                <h1 className="pb-3 header">WELCOME TO THE CRUD APPLICATION !</h1>
                <input type="text" placeholder="type id..." ref="id" className="form-control"/><br/><br/>
                <input type="text" placeholder="type name..." ref="name" className="form-control"/><br/><br/>
                <input type="text" placeholder="type url..." ref="url" className="form-control"/><br/><br/>
                <input type="number" placeholder="type price..." ref="price" className="form-control"/><br/><br/>
               <button onClick={this.addItem.bind(this)} className="btn btn-success pr-3 mr-3">ADD</button>
               <button onClick={this.deleteItem.bind(this)} className="btn btn-danger">DELETE</button><br/><br/><br/>
               <Output itemList={this.state.itemList} markForDelete={this.markForDelete.bind(this)} /> 
            </div>
        )


        
    }

}
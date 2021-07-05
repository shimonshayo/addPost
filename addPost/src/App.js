import React, { Component } from 'react'
import AddPost from './Component/Addpost/Addpost';
import Post from './Component/Post/Post';
import './App.css'
 
export default class App extends Component {

  state={
    list:[]
  }

  add=(n,i)=>{
    this.setState({list:[{name:n,info:i},...this.state.list]});
  }

  render() {
    return (
      <div className='App'>
        <AddPost addPost={this.add}/>

        {this.state.list.map((element)=>{
          return <Post name={element.name} info={element.info}/>
        })}

      </div>
    )
  }
}

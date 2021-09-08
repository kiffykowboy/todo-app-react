import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoCard from './TodoCard.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: true,
      inputValue: "",
      listOfTodos: []
    }
  }


  handleClick = () => {
    this.state.isClicked ? 
      this.setState({isClicked : false}) :
        this.setState({isClicked : true})
  }
  
  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  hanldeSubmit = (event) => {
    event.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }

  deleteItem = (index)=> {
    console.log("was clicked", index)
    ;
    let copyOfList = this.state.listOfTodos
    copyOfList.splice(index, 1)
    this.setState({listOfTodos: [...copyOfList]})
  }
  
  handleRemove = (event) => {}


  render() {

      return (
        <div className="App">
          <header className="App-header">
          <h1>
            TODOOOOOOS            
            </h1>
            <form onSubmit={this.hanldeSubmit}>
              <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
              <button type="submit">Submit</button>
            </form>
            <ol>{this.state.listOfTodos.map((todo, index)=> {
              return <TodoCard key={index} index={index} title={todo} clickToRemove={this.deleteItem}/>
            })}</ol>
      
          </header>
        </div>
      );
  }
}

export default App;

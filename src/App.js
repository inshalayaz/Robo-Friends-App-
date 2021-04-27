import React, { Component } from 'react'
import CardArray from './components/CardArray'
import SearchBox from './components/SearchBox'
import 'tachyons'
import Scroll from './components/Scroll'
import { setSearchField } from './actions'
import { connect } from 'react-redux'





const mapStateToProps = state => {
  return{
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
  onSearchChange: (e) => dispatch(setSearchField(e.target.value))
}}







class App extends Component {

constructor(){
  super()
  this.state = {
    robots: [],
  }
}


  componentDidMount(){

     fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({robots: data}))
  }


  render() {
    const {robots} = this.state
    const {searchField, onSearchChange } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if(robots.length === 0){
      return <h1 className=' white ' >Loading</h1>
    }else{
    return (
      <div className='tc mb3' >
      <h1>Robo Friends</h1>
      <SearchBox onSearchChange = {onSearchChange} searchField = {searchField} />
      <Scroll>
       <CardArray robots = {filteredRobots} />
      </Scroll>
      </div>
    )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
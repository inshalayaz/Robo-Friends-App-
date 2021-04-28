import React, { Component, lazy, Suspense } from 'react'
//import CardArray from './components/CardArray'
import SearchBox from './components/SearchBox'
import 'tachyons'
import Scroll from './components/Scroll'
import { requestRobots, setSearchField } from './actions'
import { connect } from 'react-redux'
import Header from './components/Header'


const CardArray = lazy(() => import('./components/CardArray'))


const mapStateToProps = state => {
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
  onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
}}







class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots()
  }


  render() {

    const {searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if(isPending){
      return <h1 className=' white ' >Loading</h1>
    }else{
    return (
      <div className='tc mb3' >
      {/* <h1 className='white' >Robo Friends</h1> */}
      <Header />
      <SearchBox onSearchChange = {onSearchChange} searchField = {searchField} />
      <Scroll>
        <Suspense fallback={<div>Loading...</div>}>
          <CardArray robots = {filteredRobots} />
        </Suspense>
       
      </Scroll>
      </div>
    )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
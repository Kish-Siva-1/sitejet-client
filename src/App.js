import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getLists } from './actions/lists'
import ProductForm from './containers/ProductForm'
import Tests from './containers/Tests'
import { getServices } from './actions/services'
import ServiceForm from './containers/ServiceForm'
import Services from './containers/Services'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Home from './components/Home'


class App extends Component {

  componentDidMount(){
    this.props.getLists()
    this.props.getServices()
  } 

  render(){ 

    return (
      <div className="App" >       
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Tests} />
        </React.Fragment>
      </Router>
      <Footer />
      </div>
    );
  }  

}

export default connect(null, { getLists, getServices } )(App);

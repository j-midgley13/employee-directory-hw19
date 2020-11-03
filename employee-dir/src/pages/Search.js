import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Row from '../components/Row';
import Table from '../components/Table';

class Search extends Component {
  state = {
    search: [],
    employees: [],
    searchEmp: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    const filteredChoice = this.state.employees.filter((filter)=>{
      let searchedEmp = filter.name.first + filter.name.last 
      return searchedEmp.indexOf(this.state.search) !== -1;
    })
    
    this.setState({searchEmp: filteredChoice})
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getEmployees(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.results);
        }
        this.setState({ results: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.results }));
  };
  
  render() {
    
      let table;
      const searched = this.state.search;
      let alterState
      if (searched === undefined || searched.length === 0){alterState = false}
      else {alterState = true}
      if (alterState===false){table=<Table employees= {this.state.employees} />} 
      else {table=<SearchResults results={this.state.searchEmp}/>}
      return (
<div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Employee!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <Row>
            {table}
          </Row>
          
        </Container>
      </div>
      )
      
    
  }
}

export default Search;

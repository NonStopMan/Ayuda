import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchForm from './search-controls'
import Background from '../images/top-9-beers-in-iceland-1.jpg';
import BeersList from '../containers/beers-list';
import BeerDetails from '../containers/beer-details';
import { getBeers, getBeer } from '../actions/index'


var sectionStyle = {
  backgroundImage: "url(" + { Background } + ")"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPopup: false,
      currentSelectedRow: null,
      searchModel: {}
    };
    this.gridOptions = {
      page: 0,
      sorting: [
        {
          columnName: 'name',
          direction: 'asc'
        }
      ],
      sort:'asc',
      order:'name'
    }
  }
  myCallback = (dataFromChild) => {
    console.log(dataFromChild);
  };
  updateSearchModel(searchModel) {
    debugger;
    console.log(searchModel);
    this.props.getBeers(searchModel);
  }
  render() {
    return (
      <div style={sectionStyle}>
        <SearchForm searchModel={this.state.searchModel} updateSearchModel={this.updateSearchModel.bind(this)} />
        <BeersList openModal={this.openModal} rowData={this.props.rowData} updateGridOptions={this.updateGridOptions.bind(this)} />
        <BeerDetails openPopup={this.state.openPopup} closeModal={this.closeModal} openModal={this.openModal}
          beer={this.state.currentSelectedRow} />
      </div>
    );
  }
  updateGridOptions = (gridOptions) => {
    this.gridOptions = gridOptions;
    this.props.getBeers(this.gridOptions);
  }
  openModal = (row) => {
    this.setState({
      openPopup: true,
      currentSelectedRow: row
    });
  }
  closeModal = () => {
    this.setState({ openPopup: false });
  }
  componentDidMount() {
    this.props.getBeers(this.gridOptions);
  }
}

function mapStateToProps(state) {
  return {
    rowData: state.beers,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBeers, getBeer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
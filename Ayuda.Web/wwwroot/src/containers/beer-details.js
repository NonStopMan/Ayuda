import React, { Component } from 'react';
import Popup from "reactjs-popup";

class BeerDetails extends Component {
    render() {
        if (this.props.beer) {
            return (
                <Popup
                    open={this.props.openPopup}
                    closeOnDocumentClick
                    onClose={this.props.closeModal}>
                    <div className="popup">
                        <a className="close" onClick={this.props.closeModal}>&times;</a>
                        <div className="popupTable">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead><tr>
                                    <th>Name</th>
                                    <th>Value</th>
                                </tr></thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="param">ID</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.id}</b></ul></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="param">Name</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.name}</b></ul></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="param">Description</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.description}</b></ul></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="param">Food Pairings</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.foodPairings}</b></ul></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="param">Original Gravity</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.originalGravity}</b></ul></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="param">ABV</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.abv}</b></ul></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="param">IBU</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.ibu}</b></ul></td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <span className="param">glasswareId</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.glasswareId}</b></ul></td>
                                    </tr> */}
                                    <tr>
                                        <td>
                                            <span className="param">Glass</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.glass && this.props.beer.glass.name}</b></ul></td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <span className="param">styleId</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.styleId}</b></ul></td>
                                    </tr> */}
                                    <tr>
                                        <td>
                                            <span className="param">Style</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.style && this.props.beer.style.name} </b></ul></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="param">Is Organic</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.isOrganic}</b></ul></td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <span className="param">labels</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.labels}</b></ul></td>
                                    </tr> */}
                                    {/* <tr>
                                        <td>
                                            <span className="param">servingTemperature</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.servingTemperature}</b></ul></td>
                                    </tr> */}
                                    <tr>
                                        <td>
                                            <span className="param">Serving Temperature Display</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.servingTemperatureDisplay}</b></ul></td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <span className="param">status</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.status}</b></ul></td>
                                    </tr> */}
                                    <tr>
                                        <td>
                                            <span className="param">Status Display</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.statusDisplay}</b></ul></td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <span className="param">availableId</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.availableId}</b></ul></td>
                                    </tr> */}
                                    <tr>
                                        <td>
                                            <span className="param">Available</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.available && this.props.beer.available.name}</b></ul></td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <span className="param">beerVariationId</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.beerVariationId}</b></ul></td>
                                    </tr> */}
                                    <tr>
                                        <td>
                                            <span className="param">Beer Variation</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.beerVariation && this.props.beer.beerVariation.name}</b></ul></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="param">Year</span>
                                        </td>
                                        <td><ul className=""><b>{this.props.beer.year}</b></ul></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Popup>
            );
        }
        else return null;
    }
}
export default BeerDetails;

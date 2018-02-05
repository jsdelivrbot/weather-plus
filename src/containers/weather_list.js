import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Humidity (%)</th>
            <th>Pressure (hPa)</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherList);

import React, { Component } from 'react';

export default class WeatherList extends Component {
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
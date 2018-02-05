import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp * (9/5) - 459.67);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><Chart data={temperatures} color="blue" units="F" /></td>
        <td><Chart data={humidities} color="red" units="%" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
      </tr>
    );
  }

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
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherList);

import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__max-temperature">
        Max temperature: {temperature.max} &deg;C
      </div>
      <div className="forecast-details__min-temperature">
        Min temperature: {temperature.min} &deg;C
      </div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph {wind.direction}
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }),
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};

import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import styles from '../../styles/Weather.module.scss'
import { IWeatherData } from './Weather_types'

const Weather = () => {
  const [query, setQuery] = useState('')
  const [cond, setCond] = useState<IWeatherData[]>([])
  const [staticCond, setStaticCond] = useState<IWeatherData[]>([])
  // const url = `http://api.weatherstack.com/current?access_key=ea78e96fa11cd9cad2533453df4bab35&query=${query}`
  // const ur2 = `http://api.weatherstack.com/current?access_key=704d5f1b45535d8579a8035956f5179d&query=lviv`
  useEffect(() => {
    const getWeatherLviv = async () => {
      const url = `http://api.weatherstack.com/current?access_key=704d5f1b45535d8579a8035956f5179d&query=lviv`
      const result = await axios.get(url)
      setStaticCond([result.data])
    }
    getWeatherLviv()
  }, [])

  const getData = async () => {
    const url = `http://api.weatherstack.com/current?access_key=ea78e96fa11cd9cad2533453df4bab35&query=${query}`
    const result = await axios.get(url)
    setCond([result.data])
  }

  const submitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    getData()
  }

  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={submitForm}>
        <div className={styles.inputDiv}>
          <input
            type="text"
            placeholder="Enter city"
            className={styles.input}
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            🔍
          </button>
        </div>
      </form>
      <div className={styles.weather}>
        <div>
        {  cond.length !== 0 ?
          (<>{cond.map((el) => (
            <div className={styles.data} key={el.location.name}>
              <div className={styles.weather__top}>
                <p>
                  <img src={el.current.weather_icons} alt="" />
                </p>
                <p style={{ fontSize: '28px' }}>{el.location.name}</p>
                <p style={{ fontSize: '18px' }}>{el.location.country}</p>
                <p>{el.current.observation_time}</p>
              </div>

              <div className={styles.weather__bottom}>
                <p>
                  <span>Temperature: </span>
                  <b>{el.current.temperature}° C</b>
                </p>
                <p>
                  <span>Pressure: </span>
                  <b>{el.current.pressure} mm</b>
                </p>
                <p>
                  <span>Wind Degree: </span>
                  <b>{el.current.wind_degree} deg</b>
                </p>
                <p>
                  <span>Humidity: </span>
                  <b>{el.current.humidity} %</b>
                </p>
                <p>
                  <span>Descriptions: </span>
                  <b>{el.current.weather_descriptions}</b>
                </p>
                <p>
                  <span>Visibility : </span>
                  <b>{el.current.visibility} km</b>
                </p>
              </div>
            </div>
          ))}</>)

          :

          (<>{staticCond.map((el) => (
            <div className={styles.data} key={el.location.name}>
              <div className={styles.weather__top}>
                <p>
                  <img src={el.current.weather_icons} alt="" />
                </p>
                <p style={{ fontSize: '28px' }}>{el.location.name}</p>
                <p style={{ fontSize: '18px' }}>{el.location.country}</p>
                <p>{el.current.observation_time}</p>
              </div>

              <div className={styles.weather__bottom}>
                <p>
                  <span>Temperature: </span>
                  <b>{el.current.temperature}° C</b>
                </p>
                <p>
                  <span>Pressure: </span>
                  <b>{el.current.pressure} mm</b>
                </p>
                <p>
                  <span>Wind Degree: </span>
                  <b>{el.current.wind_degree} deg</b>
                </p>
                <p>
                  <span>Humidity: </span>
                  <b>{el.current.humidity} %</b>
                </p>
                <p>
                  <span>Descriptions: </span>
                  <b>{el.current.weather_descriptions}</b>
                </p>
                <p>
                  <span>Visibility : </span>
                  <b>{el.current.visibility} km</b>
                </p>
              </div>
            </div>
          ))}</>)}
        </div>
      </div>
    </>
  )
}

export default Weather

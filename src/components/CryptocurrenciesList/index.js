// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptoCurrenciesList extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesData()
  }

  getCurrenciesData = async () => {
    const url = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(url)
    const currenciesData = await response.json()
    const modifiedData = currenciesData.map(eachCurrency => ({
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      id: eachCurrency.id,
      currencyLogo: eachCurrency.currency_logo,
    }))
    this.setState({currenciesList: modifiedData, isLoading: false})
  }

  render() {
    const {currenciesList, isLoading} = this.state
    return isLoading ? (
      <div className="spinner" data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <ul>
        <li className="heading-list">
          <h1>Coin Type</h1>
          <div className="table-col-2">
            <h1>USD</h1>
            <h1>Euro</h1>
          </div>
        </li>
        {currenciesList.map(eachCurrency => {
          const {id} = eachCurrency
          return <CryptocurrencyItem key={id} currencyDetails={eachCurrency} />
        })}
      </ul>
    )
  }
}

export default CryptoCurrenciesList

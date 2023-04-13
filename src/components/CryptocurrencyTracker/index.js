// Write your code here
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const CryptocurrencyTracker = () => {
  const logo = 'https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png'
  return (
    <div className="main-container">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <div className="main-logo-container">
        <img className="main-logo" src={logo} alt="cryptocurrency" />
      </div>
      <CryptocurrenciesList />
    </div>
  )
}

export default CryptocurrencyTracker

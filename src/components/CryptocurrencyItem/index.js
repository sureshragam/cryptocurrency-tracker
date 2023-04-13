// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li>
      <div className="table-col-1">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="table-col-2">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

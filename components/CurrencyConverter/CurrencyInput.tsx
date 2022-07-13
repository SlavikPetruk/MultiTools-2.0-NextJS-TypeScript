import styles from '../../styles/CurrencyConverter.module.scss'

export interface Props {
  currencies: string[]
  amount: number
  currency: string
  onAmountChange: any
  onCurrencyChange: any
}

const CurrencyInput: React.FC<Props> = ({
  currencies,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <div className={styles.group}>
      <input
        type="text"
        className={styles.inputValue}
        value={amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onAmountChange(Number(e.target.value))}
      />

      <select
        key={currency}
        value={currency}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onCurrencyChange(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyInput

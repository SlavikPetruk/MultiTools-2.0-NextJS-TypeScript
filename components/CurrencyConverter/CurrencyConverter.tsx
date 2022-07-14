import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import CurrencyInput from './CurrencyInput'
import styles from '../../styles/CurrencyConverter.module.scss'

const CurrencyConverter: FC = () => {
  const [amount1, setAmount1] = useState<number>(1)
  const [amount2, setAmount2] = useState<number>(1)
  const [currency1, setCurrency1] = useState('USD')
  const [currency2, setCurrency2] = useState('USD')
  const [rates, setRates] = useState<number[]>([])

  useEffect(() => {
    const localData = localStorage.getItem('data')
    if (localData) {
      setRates(JSON.parse(localData))
    } else {
      const fetchData = async () => {
        const resp = await axios.get(
          'http://data.fixer.io/api/latest?access_key=7f4304c6f661d50c1d12255fc0e27254',
        )
        setRates(resp.data.rates)
        localStorage.setItem('data', JSON.stringify(resp.data.rates))
      }
      fetchData()
    }
  }, [])

  const format = (numb: number) => Number(numb.toFixed(2))

  const amount1Change = (amount1: number, currency2: number, currency1: number) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]))
    setAmount1(amount1)
  }

  const currency1Change = (amount1: number, currency2: number, currency1: string) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[Number(currency1)]))
    setCurrency1(currency1)
  }

  const amount2Change = (amount2: number, currency2: number, currency1: number) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]))
    setAmount2(amount2)
  }

  const currency2Change = (amount2: number, currency2: string, currency1: number) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[Number(currency2)]))
    setCurrency2(currency2)
  }

  return (
    <>
      <h1>Currency Converter</h1>
      <div className={styles.inputCurrency}>
        <CurrencyInput
          currencies={Object.keys(rates)}
          onAmountChange={amount1Change}
          onCurrencyChange={currency1Change}
          amount={amount1}
          currency={currency1}
        />

        <CurrencyInput
          currencies={Object.keys(rates)}
          onAmountChange={amount2Change}
          onCurrencyChange={currency2Change}
          amount={amount2}
          currency={currency2}
        />
      </div>
    </>
  )
}

export default CurrencyConverter

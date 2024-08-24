import { useState } from "react"
import {Card} from "./components/index"
import useCurrency from "./hooks/useCurrency"
import './App.css'


function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
        <div className='w-full h-screen flex flex-wrap items-center justify-center  ' style={{backgroundImage: `url(https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
          <div className='w-full max-w-md mx-auto border border-gray-400 rounded-xl p-5 backdrop-blur-sm bg-white/30 shadow-inner shadow-slate-100'>
          <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Card
                                label="From"
                                amount = {amount}
                                currencyOptions = {options}
                                onCurrencyChange = {(currency) => setFrom(currency)}
                                selectCurrency = {from}
                                onAmountChange = {(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Card
                                label="To"
                                amount = {convertedAmount}
                                currencyOptions = {options}
                                onCurrencyChange = {(currency) => setTo(currency)}
                                selectCurrency = {to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-indigo-500 hover:font-medium">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>   
          </div>
        </div>
    </>
  )
}

export default App

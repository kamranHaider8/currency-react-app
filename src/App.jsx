import React, { useState } from 'react';
import CurrencyInputCard from './componenets/CurrencyInputCard';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  console.log("currency", amount);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center flex-col items-center bg-no-repeat bg-cover bg-center bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20220512/pngtree-growing-chart-against-the-background-of-the-usa-america-flag-candlestick-image_1298780.jpg')]">
        <form
          className=" bg-gray-500 p-6 rounded-md flex flex-col gap-2 bg-opacity-60 relative"
          onSubmit={handleSubmit}
        >
          <CurrencyInputCard
            label="To"
            currency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            amount={amount}
            onAmountChange={(amnt) => setAmount(amnt)}
            currencyOptions={options}
          />
          <button
            className='text-white bg-blue-400 rounded-lg w-[60px] p-1 self-center absolute top-[94px]'
            onClick={handleSwap}
          >Swap</button>
          <CurrencyInputCard
            label="From"
            currency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            amount={convertedAmount}
            onAmountChange={(amnt) => setConvertedAmount(amnt)}
            currencyOptions={options}
          />
          <button
            className='bg-blue-500  rounded-md text-white p-2 w-full '
            onClick={convert}
          >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>


      </div>
    </>
  )
}

export default App

import React from 'react'

function CurrencyInputCard({
    label,
    onAmountChange,
    onCurrencyChange,
    amount,
    currencyOptions = [],
    currency
}) {

    console.log("options", currencyOptions);
    
    return (
        <div className=" w-[300px] h-[85px] p-2 bg-white flex flex-col gap-1 rounded-lg">
            <div className="flex justify-between">
                <span>{label}</span>
                <span>Currency Type</span>
            </div>
            <div className="flex justify-between">
                <input
                type="number"
                value={amount}
                className=' rounded-md'
                onChange={(e)=>onAmountChange(e.target.value)}
                />
                <select
                className='p-1 rounded-md'
                onChange={(e)=>onCurrencyChange(e.target.value)}
                value={currency}
                >
                    {
                        currencyOptions.map((curr)=>{
                            return <option value={curr} key={curr}>{curr}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default CurrencyInputCard

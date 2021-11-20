
let exchangeRates = []
let convertFrom = []
let convertTo = []
let currencyAbv = 'USD'


function runCurrency(){
    getNetworkRequest()
    .then((data) => data.json()) 
    .then(data => {
        exchangeRates = Object.entries(data.rates)
        runExchange()
    })
    .catch(e => console.error('Request to get data failed!'))
}

runCurrency()


function getNetworkRequest() {
    return fetch(`https://open.er-api.com/v6/latest/${currencyAbv}`)
  }


function renderExchangeSelections(){

    
    let displayEl =  document.getElementById('renderCurrencies')
    displayEl.innerHTML = ``
    //console.log(exchangeRates)
    exchangeRates.forEach(element => {
        let currencyEl = document.createElement('ul')
        let currency = element[0]
        let value = element[1]
        currencyEl.innerHTML = `${currency}`

        currencyEl.addEventListener("click", function (){
            currencyAbv = currency
            convertFrom = currency
            runCurrency()
        })

        //console.log(`${element[0]}:   ${element[1]}`)
        
        displayEl.appendChild(currencyEl)
    })
    

}

function getInputCurrency(){
    let userInputEl = document.getElementById('inputCurrency') 
    userInputEl.innerHTML = ''
    userInputEl.addEventListener("keydown", function() {
        
    })
    let userCurrencyEl = document.createElement('p')
    userCurrencyEl.innerHTML
}




function runExchange(){
  renderExchangeSelections()
}


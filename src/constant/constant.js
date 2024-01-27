export const currencyDetails = {
    "ethereum" : {
        "networkName" : "Ethereum",
        "currencySymbol" : "ETH",
        "currencyName" : "Ethereum",
        "currencyLogo" : "/images/CryptoLogos/ethereum.png"
    },
    "polygon" : {
        "networkName" : "Matic",
        "currencySymbol" : "Matic",
        "currencyName" : "Matic",
        "currencyLogo" : "/images/CryptoLogos/polygon.png"
    }, 
    "binance" : {
        "networkName" : "Binance Smart Chain (BSC)",
        "currencySymbol" : "BNB",
        "currencyName" : "BNB",
        "currencyLogo" : "/images/CryptoLogos/binance.png"
    },
    "tron" : {
        "networkName" : "Tron",
        "currencySymbol" : "TRX",
        "currencyName" : "Tron",
        "currencyLogo" : "/images/CryptoLogos/tron.png"
    },
    "usdt" : {
        "networkName" : "Tron",
        "currencySymbol" : "TRX",
        "currencyName" : "Tron",
        "currencyLogo" : "/images/CryptoLogos/usdt.png"
    },
}
export const currencyDetailsArray = [
    {
        "networkName" : "Ethereum",
        "currencySymbol" : "ETH",
        "currencyName" : "Ethereum",
        "currencyLogo" : "/images/CryptoLogos/ethereum.png"
    },
     {
        "networkName" : "Matic",
        "currencySymbol" : "Matic",
        "currencyName" : "Matic",
        "currencyLogo" : "/images/CryptoLogos/polygon.png"
    }, 
    {
        "networkName" : "Binance Smart Chain (BSC)",
        "currencySymbol" : "BNB",
        "currencyName" : "BNB",
        "currencyLogo" : "/images/CryptoLogos/binance.png"
    },
   {
        "networkName" : "Tron",
        "currencySymbol" : "TRX",
        "currencyName" : "Tron",
        "currencyLogo" : "/images/CryptoLogos/tron.png"
    },
   {
        "networkName" : "Tron",
        "currencySymbol" : "USDT",
        "currencyName" : "USDT",
        "currencyLogo" : "/images/CryptoLogos/usdt.png"
    }
]


export const blockchainApis = {
    "binance" : {
    txUrlPart1 : "https://api.bscscan.com/api?module=account&action=txlist&address=",
    txUrlPart2 : '&sort=asc&apikey=BHFKF9RXVVBJN32K663EZQASR9PTWAB3UA',
    balanceUrlPart1: `https://api.bscscan.com/api?module=account&action=balance&address=`,
    balanceUrlPart2: `&apikey=BHFKF9RXVVBJN32K663EZQASR9PTWAB3UA`,
    usdtUrlPart1: `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x55d398326f99059ff775485246999027b3197955`,
    usdtUrlPart2 : `&address=`,
    usdtUrlPart3 : `&tag=latest&apikey=BHFKF9RXVVBJN32K663EZQASR9PTWAB3UA`
    },
    "ethereum" : {
        txUrlPart1 : "https://api.etherscan.io/api?module=account&action=txlist&address=",
        txUrlPart2 : '&sort=asc&apikey=s4dai6er88jdc43w3kw1yg873kdusfj7n2',
        balanceUrlPart1: `https://api.etherscan.io/api?module=account&action=balance&address=`,
        balanceUrlPart2: `&tag=latest&apikey=s4dai6er88jdc43w3kw1yg873kdusfj7n2`,
        usdtUrlPart1: `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdAC17F958D2ee523a2206206994597C13D831ec7`,
        usdtUrlPart2 : `&address=`,
        usdtUrlPart3 : `&tag=latest&apikey=s4dai6er88jdc43w3kw1yg873kdusfj7n2`
    },
    "polygon" : {
        txUrlPart1 : "https://api.polygonscan.com/api?module=account&action=txlist&address=",
        txUrlPart2 : '&sort=asc&apikey=X4AQUWMJSXFEF3Q5JM4AABZYWK5TSMRKY1',
        balanceUrlPart1: `https://api.polygonscan.com/api?module=account&action=balance&address=`,
        balanceUrlPart2: `&apikey=X4AQUWMJSXFEF3Q5JM4AABZYWK5TSMRKY1`,
        usdtUrlPart1: `https://api.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=0xc2132D05D31c914a87C6611C10748AEb04B58e8F`,
        usdtUrlPart2 : `&address=`,
        usdtUrlPart3 : `&tag=latest&apikey=X4AQUWMJSXFEF3Q5JM4AABZYWK5TSMRKY1`
    },
    "tron" : {
        txUrlPart1 : "",
        txUrlPart2 : '',
        balanceUrlPart1: `https://apilist.tronscanapi.com/api/accountv2?address=`,
        balanceUrlPart2: ``,
        usdtUrlPart1: `https://apilist.tronscanapi.com/api/accountv2?address=`,
        usdtUrlPart2 : `&contract_address=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t`,
        usdtUrlPart3 : ``
    }
}
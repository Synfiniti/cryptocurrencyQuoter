# Cryptocurrency Quoter

A web application that allows you to check the current price of different cryptocurrencies and perform conversions based on fiat currencies such as US dollars (USD), euros (EUR), Pesos Argentinos (ARS), and bolivares (VES).

## 🚨 WEB LIVE

https://synfiniti.github.io/cryptocurrencyQuoter/

## 🧩 Features

- Check the **current price** of a cryptocurrency in a selected fiat currency.
- View the **highest** and **lowest** prices recorded during the day.
- Shows the **percentage price change over the last 24 hours**.
- Calculates how many units of a cryptocurrency you can purchase by entering an amount in the selected currency.

## 💻 Technologies Used

- **HTML** and **CSS** for structure and styles.
- Pure **JavaScript** (Vanilla JS) for logic.
- [CoinDesk](https://data-api.coindesk.com/) API for real-time market information.

## 🚀 How to use the app

1. Select a fiat currency (USD, EUR, ARS, VES).
2. Select a cryptocurrency (e.g., BTC, ETH).
3. (Optional) Enter an amount in the selected currency.
4. Press the quote button.
5. The app will display:

- The current price of the cryptocurrency.
- The highest and lowest price of the day.
- The price change over the past 24 hours.
- And if you entered an amount, how many units you can buy.

## 📦 Local installation and launch

No installation required. Just open the `index.html` file in your browser and start using it.

## 🌐 API Used

- `https://data-api.coindesk.com/index/cc/v1/latest/tick`
  This API provides cryptocurrency prices, changes, and historical data.

## ⚠️ Note

- Make sure you have an internet connection to get real-time data.
- Available coins and cryptocurrencies may be limited by the API.

## 📄 License

This project is licensed under the MIT License. You may freely use, modify, and distribute it.

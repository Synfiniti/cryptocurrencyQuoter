// Selectores
const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector("#amount");
const coinInfo = document.querySelector("#coin-info");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const coinSelected = [...coin.children].find(
    (option) => option.selected
  ).value;
  const cryptoSelected = [...crypto.children].find(
    (option) => option.selected
  ).value;
  const amountValue = amount.value;
  try {
    coinInfo.innerHTML = `
    <div class="loader"></div>
    `;
    const response = await (
      await fetch(
        `https://data-api.coindesk.com/index/cc/v1/latest/tick?market=cadli&instruments=${cryptoSelected}-${coinSelected}&apply_mapping=true`
      )
    ).json();
    const price = response.Data[`${cryptoSelected}-${coinSelected}`].VALUE;
    const priceHigh =
      response.Data[`${cryptoSelected}-${coinSelected}`].CURRENT_DAY_HIGH;
    const priceLow =
      response.Data[`${cryptoSelected}-${coinSelected}`].CURRENT_DAY_LOW;

    const variation =
      response.Data[`${cryptoSelected}-${coinSelected}`]
        .CURRENT_DAY_CHANGE_PERCENTAGE;

    if (amountValue != "") {
      const result = Number(amountValue) / price;

      coinInfo.innerHTML = `
            <p class="info">El precio es: <span class="price">$${Math.round(
              price
            )}</span></p>
            <p class="info">
              El precio más alto es: <span class="price">$${Math.round(
                priceHigh
              )}</span>
            </p>
            <p class="info">
              El precio más bajo es: <span class="price">$${Math.round(
                priceLow
              )}</span>
            </p>
            <p class="info">Variacion 24H: <span class="price">${variation}%</span></p>
            <p class="info">
              Puede comprar: <span class="price">${result.toFixed(
                4
              )} ${cryptoSelected}</span>
            </p>
    `;
    } else {
      coinInfo.innerHTML = `
            <p class="info">El precio es: <span class="price">$${Math.round(
              price
            )}</span></p>
            <p class="info">
              El precio más alto es: <span class="price">$${Math.round(
                priceHigh
              )}</span>
            </p>
            <p class="info">
              El precio más bajo es: <span class="price">$${Math.round(
                priceLow
              )}</span>
            </p>
            <p class="info">Variacion 24H: <span class="price">${variation.toFixed(
              4
            )}%</span></p>

    `;
    }
  } catch (error) {
    console.log(error);
  }
});

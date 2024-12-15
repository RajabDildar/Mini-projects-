const dropDowns = document.querySelectorAll(".wrapper1 select");
const btn = document.querySelector("form button");
const fromCountry = document.querySelector("#from-country");
const toCountry = document.querySelector("#to-country");
const amount = document.querySelector("#amount");
let amtVal = amount.value;
const msg = document.querySelector("#msg");
const updatedDate = document.querySelector("#updatedDate");

for (let select of dropDowns) {
  for (let currCode in countryList) {
    let Options = document.createElement("option");
    Options.innerText = currCode;
    Options.value = currCode;
    select.append(Options);

    if (select.name === "from-country" && currCode === "USD") {
      Options.selected = "selected";
    } else if (select.name === "to-country" && currCode === "PKR") {
      Options.selected = "selected";
    }
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const getRate = async () => {
  let response = await fetch(
    "https://v6.exchangerate-api.com/v6/e8acad23f1d12db8a8b86334/latest/USD"
  );
  let rate = await response.json();

  let rateList = rate.conversion_rates;
  let fromCurrency;
  let toCurrency;
  for (let key in rateList) {
    if (key === fromCountry.value) {
      fromCurrency = key;
    } else if (key === toCountry.value) {
      toCurrency = key;
    }
  }

  let convertedAmount =
    Number(amtVal) * (rateList[toCurrency] / rateList[fromCurrency]);
  msg.innerText = `${amtVal} ${fromCurrency} = ${convertedAmount.toFixed(
    2
  )} ${toCurrency}`;
  let updation = rate.time_last_update_utc.split(" ").slice(0, 4).join(" ");
  updatedDate.innerText = `Last updated : ${updation}`;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  amtVal = amount.value;
  if (amtVal == "" || amtVal < 1) {
    amtVal = "1";
    amount.value = "1";
  }
  getRate();
});

window.addEventListener("DOMContentLoaded", getRate);

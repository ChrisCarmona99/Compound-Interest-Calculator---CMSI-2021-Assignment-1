const principleBox = document.querySelector("#p")
const interestRateBox = document.querySelector("#r")
const numTimesCompoundedBox = document.querySelector("#n")
const totalNumOfYearsBox = document.querySelector("#t")
const compoundInterestSpan = document.querySelector("#A")

function computeCompoundInterest() {
  const P = principleBox.value
  const r = interestRateBox.value
  const n = numTimesCompoundedBox.value
  const t = totalNumOfYearsBox.value
  const A = ( P * (1 + (r/n)) ** (n * t) ).toFixed(2)
  compoundInterestSpan.textContent = A
}

principleBox.addEventListener('input', computeCompoundInterest)
interestRateBox.addEventListener('input', computeCompoundInterest)
numTimesCompoundedBox.addEventListener('input', computeCompoundInterest)
totalNumOfYearsBox.addEventListener('input', computeCompoundInterest)

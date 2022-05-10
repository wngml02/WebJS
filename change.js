function calculateChange(payment, cost) {
  // 코드를 작성해 주세요.
  let change = payment - cost
  const fiftyCount = (change-(change % 50000)) / 50000
  change = change - 50000 * fiftyCount
  console.log(`50000원 지폐: ${fiftyCount}장`)
  const tenCount = (change - change % 10000) / 10000
  change = change - 10000 * tenCount
  console.log(`10000원 지폐: ${tenCount}장`)
  const fiveCount = (change - change % 5000) / 5000
  change = change - 5000 * fiveCount
  console.log(`5000원 지폐: ${fiveCount}장`)
  const oneCount = change / 1000
  console.log(`1000원 지폐: ${oneCount}장`)

}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, 17)
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17))
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber
        clearInterval(interval)
      } else {
        currentNumber += inc
      }
      callback(currentNumber)
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  animateNumber(100, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('coffee-branches').innerText = formattedNumber
  })
  
  animateNumber(85, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('number-of-awards').innerText = formattedNumber
  })
  
  animateNumber(10567, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('happy-customer').innerText = formattedNumber
  })
  animateNumber(900, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('staff').innerText = formattedNumber
  })
})
function signup() {
    var password = document.getElementById('pass').value;
    var confirmpassword = document.getElementById('confirmpass').value;
  if(pass != confirmpass){
    document.getElementById("check").innerHTML = "mat khau ko giong nhau";
  }
}
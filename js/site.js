//Get The Values From The Page
//Starting/Controller function
function getValues() {
  //get the user values from the page
  let fizzValue = document.getElementById('fizzValue').value
  let buzzValue = document.getElementById('buzzValue').value

  //check for numbers
  fizzValue = parseInt(fizzValue)
  buzzValue = parseInt(buzzValue)

  //check that the numbers are integers
  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    //call fizzBuzz
    let fbArray = fizzBuzzThree(fizzValue, buzzValue)
    //call displayData and write values to the screen
    displayData(fbArray)
  } else {
    alert('You must enter integers')
  }
}

//Generate FizzBuzz Numbers From Start To End
//Logic function
function fizzBuzz(fizzValue, buzzValue) {
  //init the returnArray
  let returnArray = []

  //loop from 1 to 100
  for (let i = 1; i <= 100; i++) {
    //check current value in three steps
    //push to the array correct value
    if (i % fizzValue === 0 && i % buzzValue === 0) {
      returnArray.push('FizzBuzz')
    } else if (i % fizzValue === 0) {
      returnArray.push('Fizz')
    } else if (i % buzzValue === 0) {
      returnArray.push('Buzz')
    } else {
      returnArray.push(i)
    }
  }

  return returnArray
}

//Alternate Option
function fizzBuzzTwo(fizzValue, buzzValue) {
  let returnArray = []

  let Fizz = false
  let Buzz = false

  for (let i = 1; i < 100; i++) {
    Fizz = i % fizzValue == 0
    Buzz = i % buzzValue == 0

    switch (true) {
      case Fizz && Buzz: {
        returnArray.push('FizzBuzz')
        break
      }
      case Fizz: {
        returnArray.push('Fizz')
        break
      }
      case Buzz: {
        returnArray.push('Buzz')
        break
      }
      default: {
        returnArray.push(i)
        break
      }
    }
  }

  return returnArray
}

//Alternate Option
function fizzBuzzThree(fizzValue, buzzValue) {
  let returnArray = []

  for (let i = 1; i < 100; i++) {
    let value =
      (i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') ||
      i
    returnArray.push(value)
  }

  return returnArray
}

//Display FizzBuzz Values
//Display/View function
function displayData(fbArray) {
  //get the table body element from the page
  let tableBody = document.getElementById('results')

  //get the template row
  let templateRow = document.getElementById('fbTemplate')

  //clear the table first
  tableBody.innerHTML = ''

  for (let index = 0; index < fbArray.length; index += 5) {
    let tableRow = document.importNode(templateRow.content, true)

    //grab the td's and put into an array
    let rowCols = tableRow.querySelectorAll('td')
    rowCols[0].classList.add(fbArray[index])
    rowCols[0].textContent = fbArray[index]
    rowCols[1].classList.add(fbArray[index + 1])
    rowCols[1].textContent = fbArray[index + 1]
    rowCols[2].classList.add(fbArray[index + 2])
    rowCols[2].textContent = fbArray[index + 2]
    rowCols[3].classList.add(fbArray[index + 3])
    rowCols[3].textContent = fbArray[index + 3]
    rowCols[4].classList.add(fbArray[index + 4])
    rowCols[4].textContent = fbArray[index + 4]

    tableBody.appendChild(tableRow)
  }

  //add all the rows to the table
}

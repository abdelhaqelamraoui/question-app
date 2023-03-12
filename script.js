
let divContent = document.getElementById('content')
let part1 = document.getElementById('part-1')
let part2 = document.getElementById('part-2')
let inputSpan = document.getElementById('input-span')
let input = document.getElementById('input')
let btnNext = document.getElementById('next')
let btnVerify = document.getElementById('verify')

let counter = 0
let sentences = []
let content =  (divContent.innerText)
let mutex = false
function main() {
  let lines = content.split("\n")
  lines.forEach(element => {
    if(element.length > 2) {
      var arr = element.split(/(\*)(.*)(\*)/)
      var sentence = {
        'part-1': arr[0].trim(),
        'part-2': arr[4].trim(),
        'answer': arr[2].trim()
      }
      sentences.push(sentence)
      // console.log(sentence);
    }  
  });
  
  part1.innerText = sentences[counter]['part-1']
  part2.innerText = sentences[counter]['part-2']

  btnVerify.addEventListener('click', verify)
  btnNext.addEventListener('click', next)

}

main()


function verify(){

  let input = document.getElementById('input')

  if(counter > sentences.length-1) {
    console.log("Exit verify: max reached")

  } else if(!input) {
    console.log("Exit verify: null input element");

  } else if(input.value.trim().length === 0) {
    console.log("Exit verify: empty input")
    
  } else {

    let answer = sentences[counter]['answer'].toLowerCase()
    let inAnswer = input.value.trim().toLowerCase()
    if(inAnswer == answer) {
      // btnVerify.style = "color: green"
      // btnVerify.innerText = "Vrai"
      let spanAnswer = document.createElement('span')
      spanAnswer.style = "color: green; font-weight: bold;"
      spanAnswer.innerText = answer
      inputSpan.innerHTML = ""
      inputSpan.append(spanAnswer)
    } else {
      // btnVerify.style = "color: red"
      
      let spanInAnswer = document.createElement('span')
      spanInAnswer.style = "color: red; text-decoration: line-through; margin-right: 3px;"
      spanInAnswer.innerText = inAnswer
      
      let spanAnswer = document.createElement('span')
      spanAnswer.style = "color: green; font-weight: bold;"
      spanAnswer.innerText = answer
      inputSpan.innerHTML = ""
      
      inputSpan.append(spanInAnswer)
      inputSpan.append(spanAnswer)
    }
    // btnVerify.setAttribute("disabled", "true")
    input.value = ""
    mutex = true

  }
    
}


function next() {

  if(!mutex) {
    console.log("Verify first")
    return
  }

  inputSpan.innerHTML = '<input type="text" name="answer" id="input">'

  
  if(counter++ < sentences.length-1) { 
    part1.innerText = sentences[counter]['part-1']
    part2.innerText = sentences[counter]['part-2']
    // input.value = ""
  } else {
    console.log("Max reached");
  }
  
  mutex = false
}
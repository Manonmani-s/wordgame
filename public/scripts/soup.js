const letters = [
    `blnuacisabosli`,
    `atpircsnoitcah`,
    `sycjcnirpapblp`,
    `hbayaaanalviul`,
    `vfyvorbldtcaae`,
    `tpsojtoaaroajd`,
    `ttootryaupbhnh`,
    `ypprforbijoysy`,
    `yhegpfymyaliyp`,
    `pndrnoisufdloc`,
    `llyalxnyloacto`,
    `fpptyapythonvo`,
    `aordpascalrlla`,
    `aymamatlabcoaa`,
  ]
  
  
  
  const words = ['bash','delphi','lua','lynx','ruby','perl','actionscript','fortran','cobol',
  'pascal','basic','matlab','php','groovy','python','coldfusion','java','ada']
  
  words.forEach(word =>{
    document.querySelector('.list>ul').innerHTML += `<li onclick=findWord("${word}")> ${word} </li>`
  })
  
  let output = '<tbody>';
  let count = 0
  letters.forEach(list=>{
    output += '<tr>'
    list.split('').map(letter=>{
      output += `<td id=${count}> ${letter.toUpperCase()} </td>` 
      count ++; 
    })
    output += '</tr>'
  })
  output += '</tbody>';
  
  
  document.querySelector('.gameboard').innerHTML = output;
function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.getElementById('app').querySelectorAll('div.target')[0]
}


function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  //<li>1</li> <li>2</li> <li>12</li> <li>11</li> <li>10</li>
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString();
  }
}



function deepestChild() {
  return document.getElementById('app').querySelectorAll('div#grand-node div')[0]
}

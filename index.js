function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
 return document.getElementById(`nested`).querySelector(`.target`);
}

function increaseRankBy(n) {
  const lists = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lists.length; i++) {
  lists[i].innerHTML= parseInt(lists[i].innerHTML) + n;
} }

function deepestChild() {
 var elem = document.getElementById(`grand-node`);
  while (elem.children.length === 0) {
  elem = elem.children[0];
  }
  return elem;
}

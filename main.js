function make_block(id) {
  var val1 = document.querySelector(`.${id}`);
  var val2 = document.querySelectorAll('.childb');
  for (var i = 0; i < val2.length; i++) {
    val2[i].style.display = 'none';
  }
  val1.style.display = 'block';
  
  get22 = document.querySelector(`#${id}`);
  get22.style.animation = 'none';
  get22.classList.add('pulsate-bck');
  get22.offsetHeight;
  get22.style.animation = null;
  
setTimeout(function(){ get22.classList.remove('pulsate-bck');},700);

}
function scrolld() {
  a = document.querySelector('.rdt');
  a.scrollTo(500,500);
}
function scrollu() {
  a = document.querySelector('.rdt');
  a.scrollTo(0,0);
}
function deleteit(delid='rdt_un') {
  ids = document.querySelector(`#${delid}`);
  ids.remove()
}
function copy(dts) {
  var aux = document.createElement("input");
  aux.setAttribute("value", dts);

  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux)
}
myobj = {
  'rdt_un' : 'rocker4593  ',
  'rdt_sb' : 'rocker4593 is not shadowbanned.   ',
  'rdt_pu' : 'https://www.reddit.com/user/rocker4593/   ',
  'rdt_uu' : 'https://www.reddit.com/user/rocker4593/upvoted   ',
  'twr_un' : '( My Twitter Handel/Username = @VasteAditya )',
  'twr_pu' : '( My Account URL = https://mobile.twitter.com/VasteAditya )',
  'twr_nm' : '( My Twitter Name = Aditya Vaste )',
  'ytb_un' : '( My Channel Name = Aditya Rocker )',
  'ytb_cu' : '( My Channel URL = https://youtube.com/channel/UCB1xWVhIPAX9_NtKDPHfOYg )',
  'ytb_ce' : '( My Channel Email = manishawaste16@gmail.com  )',
  'csr_un' : '( Coinsniper Username = Coding Bro )',
  'csr_em' : '( Coinsniper Email = coding1bro@gmail.com )'
}
function delAdd(idcls) {
  audio = new Audio("sound.mp3");
  audio.play();
  
  sel_cl = idcls[0]
  set2 = Number(localStorage.getItem(sel_cl))
  
  val1 = document.querySelector(`.${sel_cl}`)
  val1.remove()
  
  text = document.createTextNode(` ${myobj[sel_cl]} #task${set2}`)
  ele1 = document.createElement('p');
  ele1.classList.add(sel_cl);
  /*ele1.setAttribute('id',`uu${set2}`);*/
  ele1.setAttribute('onclick','delAdd(this.classList)');
  ele1.appendChild(text);
  
  val2 = document.querySelector(`.${sel_cl}p`);
  val2.appendChild(ele1);

/*______*/
  get2 = document.querySelector(`.${sel_cl}`);
  get2.style.animation = 'none';
  get2.classList.add('pulsate-bck');
  get2.offsetHeight;
  get2.style.animation = null;

  //Copying
  dts_path = document.querySelector(`.${sel_cl}`)
  dts = dts_path.innerHTML
  copy(dts)
  
  get1 = document.querySelector('.copied');
  get1.style.animation = 'none';
  get1.classList.add('slide-in-elliptic-bottom-fwd');
  get1.offsetHeight; /* trigger reflow */
  get1.style.animation = null;
  
  n = set2 + 1
  
  localStorage.setItem(sel_cl,n)
  az = localStorage.getItem(sel_cl)
  
setTimeout(function() { get2.classList.remove('pulsate-bck');},700);
  }
  
// Change It 
function changeit() {
  argm = Number(document.querySelector('#clc').value)
  console.log(argm);
  myobj = {
    'rdt_un': 'rocker4593   ',
    'rdt_sb': 'rocker4593 is not shadowbanned.   ',
    'rdt_pu': 'https://www.reddit.com/user/rocker4593/   ',
    'rdt_uu': 'https://www.reddit.com/user/rocker4593/upvoted  )',
    'twr_un': '( My Twitter Handel/Username = @VasteAditya )',
    'twr_pu': '( My Account URL = https://mobile.twitter.com/VasteAditya )',
    'twr_nm': '( My Twitter Name = Aditya Vaste )',
    'ytb_un': '( My Channel Name = Aditya Rocker )',
    'ytb_cu': '( My Channel URL = https://youtube.com/channel/UCB1xWVhIPAX9_NtKDPHfOYg )',
    'ytb_ce': '( My Channel Email = manishawaste16@gmail.com  )',
    'csr_un': '( Coinsniper Username = Coding Bro )',
    'csr_em': '( Coinsniper Email = coding1bro@gmail.com )'
  }
  mykeys = Object.keys(myobj)
  for (var i = 0; i < mykeys.length; i++) {
    localStorage.setItem(mykeys[i], argm)
  }
}

function blurun() {
  getz = document.querySelector('.changeit');
  getz.style.display = 'none';
  getz.style.display = 'block';
  getz.style.animation = 'none';
  getz.classList.add('scale-in-bottom');
  getz.offsetHeight; /* trigger reflow */
  getz.style.animation = null;
  setTimeout(function(){ getz.classList.remove('scale-in-bottom');},700);

}
function bluroff() {
  gez = document.querySelector('.changeit');
  gez.style.animation = 'none';
  gez.classList.add('scale-out-bottom');
  gez.offsetHeight; /* trigger reflow */
  gez.style.animation = null;
  setTimeout(function(){ gez.classList.remove('scale-out-bottom');  getz.style.display = 'none';},700);
}

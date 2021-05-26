const goBtn = () => {
  const btn = document.getElementById('go');
  const answer = document.getElementById('answer');

  btn.addEventListener('click', ntexst = () => {
    const fname = document.getElementById('fname').value;
    const par = document.createElement('P');
    document.getElementById('answer').appendChild(par);
    /*const del = document.createElement('BUTTON');
    document.getElementById('answer').appendChild(del);
    del.innerHTML = 'Dzēst';*/
    const male = fname.charAt(fname.length - 1)
    if (fname === '') {
      par.innerHTML = `Labdien svešineik! Kā tevi sauc?`;
    } else if (male === 's') {
      par.innerHTML = `Labdien ${fname.slice(0, fname.length - 1)}! Prieks iepazīties,  mani sauc Botiņš!`;
    } else {
      par.innerHTML = `Labdien ${fname}! Prieks iepazīties,  mani sauc Botiņš!`;
    }
  });
}
goBtn();





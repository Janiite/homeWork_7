const goBtn = ()=> {
    const btn = document.getElementById('go');
    
    btn.addEventListener('click', ntexst = ()=>{
          const fname = document.getElementById('fname').value;
          const par = document.createElement('P');
          document.body.appendChild(par);
          if(fname === ''){
            par.innerHTML = `Labdien svešineik! Kā tevi sauc?`;
          }else {
              par.innerHTML = `Labdien ${fname}! Prieks iepazīties,  mani sauc Botiņš!`;
          }  
    });
}

goBtn();





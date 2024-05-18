//pseudocod;
//1.dau click pe Show Heroes;
//2.vreau sa se ascunda butonul de Show Heroes;
//3.vreau sa se afiseze butonul de Start Fight;
//4.vreau sa se afiseze eroii;
//5.ca sa dau click pe buton,trebuie sa iau elementul din html si sa il aduc in js;
//6.declar o variabila in care vreau sa tin elementul pe care il iau din HTML (letshowHeroesBtn);
//7.prin "document.getElementById() vreau sa merg in document HTML si sa iau elementul carui id il pun intre paranteze"

let showHeroesBtn = document.getElementById("show-heroes");
let startFightBtn = document.querySelector("#start-fight");
let heroesContainer = document.querySelector(".heroes-container");
let showWinerContainer = document.querySelector("#show-winner");
showWinerContainer.innerHTML = epicFight.findWinner();

//let showHeroesBtn = document.querySelector("#show-heroes");

//pe elementul ce tine butonul(showHeroesBtn) vreau sa pun un eveniment ce sta si asculta in background,iar atunci cand utilizatorul da CLICK pe buton se declanseaza evenimentul => la click pe buton se apeleaza functia showHeroesFunc (si se intampla tot ceea ce este in interiorul ei);
showHeroesBtn.addEventListener("click", showHeroesFunc);
function showHeroesFunc() {
  //2.vreau sa se ascunda butonul de Show Heroes

  showHeroesBtn.classList.add("d-none");
  //3.vreau sa se afiseaza butonul de start fight
  startFightBtn.classList.add("d-block");

  //4 vreau sa se afiseze eroii
  heroesContainer.classList.add("d-flex");
}

//1.dau click pe StartFight
startFightBtn.addEventListener("click", startFightFunc);

function startFightFunc() {
  //2.vreau sa ascund butonul de StartFight
  startFightBtn.classList.remove("d-block");
  //3.Vreau sa afisez castigatorul (show-winner);
  showWinerContainer.classList.add("d-block");
}

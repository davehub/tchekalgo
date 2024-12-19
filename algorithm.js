function analysemaphrase() {
    const longueur = 0;
    const nombre_mots = 0;
    const nombre_voyelle = 0;
    const voyelles = "aeiouAEIOU";
  
    const phrase = "";
    const motEnCours = false;
    var caractere;
  
    console.log("Veuillez entrer une phrase terminée par un point (finissez par appuyer sur Entrée puis sur le point) :");
    while (true) {
      caractere = prompt("Entrez un caractère :");
      if (caractere === ".") {
        break;
      }
      phrase += caractere;
    }
  
    for (let i = 0; i < phrase.length; i++) {
      caractere = phrase[i];
      longueur++;
  
      if (voyelles.includes(caractere)) {
        nombre_voyelle++;
      }
  
      if (caractere === ' ') {
        if (motEnCours) {
          nombre_mots++;
          motEnCours = false;
        }
      } else {
        motEnCours = true;
      }
    }
  
    if (motEnCours) {
      nombre_mots++;
    }
  
    console.log(`Longueur de la phrase : ${longueur}`);
    console.log(`Nombre de mots : ${nombre_mots}`);
    console.log(`Nombre de voyelles : ${nombre_voyelle}`);
  }
  
  analysemaphrase();
  
  
class Des {
    constructor(nbrface) {
        this.nbrface = nbrface;
        this.score = 0;
    }
    lancer() {
        this.score = Math.floor(Math.random() * this.nbrface) + 1;
        return this.score;
    }
}

class Joueur {
    constructor(nom, des) {
        this.nom = nom;
        this.valeurLance = 0;
        this.des = des;
    }
    lancerDes() {
        this.valeurLance = this.des.lancer();
        return this.valeurLance;
    }
}

class Partie {
    constructor(joueur1, joueur2, nbrTour = 5){
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.nbrTour = nbrTour;
        this.scoreJ1 = 0;
        this.scoreJ2 = 0;
    }
    lancerPartie() {
        for (let i = 1; i <= this.nbrTour; i++) {
            const lanceJ1 = this.joueur1.lancerDes();
            const lanceJ2 = this.joueur1.lancerDes();

            if (lanceJ1 > lanceJ2) {
                this.scoreJ1 += 2;
            } else if (lanceJ1 == lanceJ2) {
                this.scoreJ1 += 1;
                this.scoreJ2 += 1;
            } else {
                this.scoreJ2 += 2;
            }
        }

        if(this.scoreJ1 > this.scoreJ2) {
            console.log(`Le gagnant est ${this.joueur1.nom} et son score est de ${this.scoreJ1} points.`)
        } else if(this.scoreJ2 > this.scoreJ1) {
            console.log(`Le gagnant est ${this.joueur2.nom} et son score est de ${this.scoreJ2} points.`)
        } else {
            console.log(`Il y a égalité, les deux joueurs ont ${this.scoreJ1} points.`)
        }
    }
}

const joueur1 = new Joueur("Fabrice", new Des(6));
const joueur2 = new Joueur("Sandra", new Des(6));

const partie = new Partie(joueur1, joueur2);
partie.lancerPartie();
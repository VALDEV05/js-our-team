/* Descizione
Il nostro compito é quello di rappresentare, utilizzando la struttura dati piú appropriata, una lista di membri di un team.
Ciascun membro del team avrá come caratteristica name, role, image
Per le immagini potete mettere il percorso di un immagine presa da internet, provate con lorem pixum (https://picsum.photos/images)
Stampare in console tutti gli elementi del team e le loro proprieta.
Esempio
nome: Ben Green
role: CEO
image: https://picsum.photos/id/1025/300/300
Consigli:
Pensate alla struttura dati che volete usare, cercando di porvi alcune domande:
In quale struttura dati salverò i miei dati?
a. Me ne serve più di una?
b. Quale è la scelta migliore in termini di complessità?
Ci sono dei cicli?
a. La scelta dei cicli è coerente con le strutture dati che ho scelto?
b. Potrebbe esserci una via più semplice se cambiassi struttura dati? */



/* Obiettivo principale */
/* Il nostro compito é quello di rappresentare, utilizzando la struttura dati piú appropriata, 
una lista di membri di un team. */


// Ciascun membro del team avrá come caratteristica name, role, image (https://picsum.photos/images)
//stampare tutto in console 
//esempio Esempio
/* const user1 {
    nome: Ben Green
    role: CEO
    image: https://picsum.photos/id/1025/300/300
} */


/* fonte ruoli 
    https://help.tableau.com/current/blueprint/it-it/bp_project_team_roles_responsibilities.htm
*/

/* var nameArray = [
    firstElementArray = {
        chiave1: 'valore',
        chiave2: 'valore',
        chiave3: 'valore'
    },
    firstElementArray = {
        chiave1: 'valore',
        chiave2: 'valore',
        chiave3: 'valore'
    }
]; */
let userPlaceToPrint = document.querySelector('.userTeam');

//creazione della lista dei membri del team
let nameUser;
let roleUser;
let imageUser;

const team = [
    firstElement = {
        name: 'JANET WELCH',
        role: 'CEO',
        image: 'https://picsum.photos/id/1025/300/300'
    },
    secondElement = {
        name: 'DOUGLAS WELCH',
        role: 'CIO',
        image: 'https://picsum.photos/id/1025/300/300'
    },
    thirdElement = {
        name: 'DANNY SHARP',
        role: 'Analytics Director',
        image: 'https://picsum.photos/id/1025/300/300'
    },
    fourthElement = {
        name: 'RHONDA BROWN ',
        role: 'Data Engineer',
        image: 'https://picsum.photos/id/1025/300/300'
    }
]


for (let index = 0; index < team.length; index++) {
    const element = team[index];
    /* console.log(element); */
    for (const key in element) {
        if (key == 'name') {
            nameUser = element[key]
        } else if (key == 'role') {
            roleUser = element[key]
        } else {
            imageUser = element[key]
        }
    }
    console.log(nameUser, roleUser, imageUser);
}
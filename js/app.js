//fonction init qui centralise le tout 
const init = function () {


    const proAnswer = aboutYou();
    checkQuestion(proAnswer);
}


//console.log(question);
const aboutYou = function () {
    // on pose la question N°index à l'utilisateur
    const proAnswer = window.prompt(questions[0]);
    // on retourne la réponse de l'utilisateur
    return proAnswer;

}

const checkQuestion = function (proAnswer) {


    let possibleAnswer = reponses[0][0];
    //console.log(possibleAnswer);

    //console.log(reponses);

    if (proAnswer == possibleAnswer) {

        console.log('merci de répondre aux questions suivantes');
        return true;
    } else {
        console.log('votre réponse n\'est pas conforme , deux direction cardinales, séparées d\'un tiret');
        return false
    }

}




















//je m'assure que le DOM est dispo avant de lancer le js
document.addEventListener('DOMContentLoaded', init);
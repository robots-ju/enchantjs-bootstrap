/**
 * Affiche un message dans la zone de texte au-dessus de la zone de jeu
 * @param {String} message Message à afficher
 */
export default function(message)
{
    document.getElementById('message').innerText = message;
}

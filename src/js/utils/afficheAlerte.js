/**
 * Affiche un message d'alerte qui ne disparaît pas automatiquement
 * @param {String} message Message à afficher
 */
export default function(message)
{
    const alerte = document.createElement('div');
    alerte.className = 'alert alert-info';

    const paragraph = document.createElement('p');
    paragraph.innerText = message;
    alerte.appendChild(paragraph);

    alerte.addEventListener('click', () => {
        alerte.parentNode.removeChild(alerte);
    });

    const divMessage = document.getElementById('message');
    divMessage.parentNode.insertBefore(alerte, divMessage);
}

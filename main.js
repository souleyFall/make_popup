/**
 * cache le pop-in au démarrage de la plage
 */
document.getElementById('overlay').style.display='none';

/**
 * affiche le pop-in après 3 secondes de délai
 */
setTimeout(() => {
    document.getElementById('overlay').style.display='flex';
}, 3000);

/* fait disparaitre le pop-in */
function close_overlay(){
    document.getElementById('overlay').style.display='none';
}

/* fait apparaitre le pop-in */
function open_overlay(){
    document.getElementById('overlay').style.display='flex';
}

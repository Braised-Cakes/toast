import Toast from './index.js'

document.getElementById('toast1').onclick = function() {
    new Toast({
        icon: 'none',
        text: 'text'
    });
}
document.getElementById('toast2').onclick = function() {
    new Toast({
        icon: 'success',
        text: 'text'
    });
}
document.getElementById('toast3').onclick = function() {
    new Toast({
        icon: 'warn',
        text: 'text'
    });
}
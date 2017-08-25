import './index.css'

function Toast(config) {
    var defaults = {
        fadeInTime: 200, //渐显时间
        fadeOutTime: 200, //渐隐时间
        fullDisplayTime: 1000, //opacity：1持续时间
        icon: '', //none, success, warn
        text: '' //内容
    };
    for (var param in config) {
        if (defaults.hasOwnProperty(param)) {
            defaults[param] = config[param];
        }
    }
    config = defaults;
    config.durationTime = config.fadeInTime + config.fadeOutTime + config.fullDisplayTime;

    this.init(config);
};
Toast.prototype.init = function(config) {
    if (!document.querySelector('#j-plugin-toast')) {
        var oDiv = document.createElement('div');
        oDiv.innerHTML = `<div id="j-plugin-toast" class="toast-tips active"></div>`;
        document.body.appendChild(oDiv.childNodes[0]);
    }
    document.querySelector('#j-plugin-toast').innerHTML =
        `<div class="tips ${config.icon}">
			<i></i>
			<p class="tips-txt">${config.text}</p>
		</div>`;
    this.show(config);
};
Toast.prototype.bind = function() {
    document.querySelector('#j-plugin-toast').classList.add('active');
    document.querySelector('#j-plugin-toast').addEventListener('webkitAnimationEnd', this.removeClass)
    document.querySelector('#j-plugin-toast').addEventListener('animationend', this.removeClass)
}
Toast.prototype.unbind = function() {
    document.querySelector('#j-plugin-toast').classList.remove('active');
    document.querySelector('#j-plugin-toast').removeEventListener('webkitAnimationEnd', this.removeClass)
    document.querySelector('#j-plugin-toast').removeEventListener('animationend', this.removeClass)
}
Toast.prototype.removeClass = function() {
    document.querySelector('#j-plugin-toast').classList.remove('active');
}
Toast.prototype.show = function(config) {
    this.unbind(config);
    setTimeout(function() {
        this.bind(config);
    }.bind(this), 100);
}


export default Toast;
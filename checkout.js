x = document.getElementsByClassName('proc_button');

var myBlurFunction = function(state) {

    /* state can be 1 or 0 */
    var containerElement = document.getElementsByTagName('body');
    var overlayEle = document.getElementById('overlay');

    if (state) {
        overlayEle.style.display = 'block';
        containerElement.setAttribute('class', 'blur');
    } else {
        overlayEle.style.display = 'none';
        containerElement.setAttribute('class', null);
    }
};
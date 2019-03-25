// 防抖
function throttle(fn, delay, atleast) {
    var timeout = null;
    startTime = new Date();
    return function () {
        curTime = new Date()
        clearTimeout(timeout);
        if (curTime - startTime >= atleast) {
            fn();
            startTime = curTime
        } else {
            timeout = setTimeout(fn, delay);
        }
    }
}

function lazyload() {
    var imgBox = document.getElementsByTagName("img");
    var len = imgBox.length;
    var n = 0;
    return function () {
        var seeHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < len; i++) {
            if (imgBox[i].offsetTop < seeHeight + scrollTop) {
                if (imgBox[i].getAttribute('src') === "img/loading.gif") {
                    imgBox[i].src = imgBox[i].getAttribute('data-src');
                }
                n = n + 1
            }
        }
    }
}
var loadImgs = lazyload();
loadImgs()
window.addEventListener('scroll', throttle(loadImgs, 500, 1000), false);
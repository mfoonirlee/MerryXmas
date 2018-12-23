
// import '../starsky/assets/style.less';
// import './style.less';
// import snow1 from './snow1.png';
// import snow2 from './snow2.png';
// import snow3 from './snow3.png';
// import snow4 from './snow4.png';

(function(){
    var ScaleWidth = [12, 4];
    var ClassNum = 4;
    var ClassName = 'snow snow';
    var Dur = [30, 15];
    var RotateCls = 'rotate rotate';
    var trfX = document.body.clientWidth;
    var trfY = window.screen.height;
    var opacity = [.5, .5];

    function Snow() {
        var width = Math.floor(Math.random() * ScaleWidth[1] + ScaleWidth[0]);
        var img = document.createElement('img');
        img.className = RotateCls + + Math.ceil(Math.random() * ClassNum);
        img.src = './snow' + Math.ceil(Math.random() * 4) + '.png';
        // img.src = [snow1, snow2, snow3, snow4][Math.floor(Math.random() * 4)];
        img.style.opacity = Math.random() * opacity[1] + opacity[0]; 
        

        var div = document.createElement('div');
        div.className = ClassName + Math.ceil(Math.random() * ClassNum);
        div.style['animation-duration'] = Math.floor(Math.random() * Dur[1]) + Dur[0] + 's';
        div.style.width = width + 'px';
        div.style.transform = 'translate3d(' + Math.floor(Math.random() * trfX - width) + 'px, ' + Math.floor(-Math.random() * trfY) + 'px, 0)';

        div.appendChild(img);
        document.body.appendChild(div);
        return this;
    }
    function str_encrypt(str) {
        if (!str) return '';
        var c = String.fromCharCode(str.charCodeAt(0) + str.length);

        for (var i = 1; i < str.length; i++) {
            c += String.fromCharCode(str.charCodeAt(i) + str.charCodeAt(i - 1));
        }

        return encodeURIComponent(c);
    }

    var input = document.createElement('input');
    input.className = 'input';
    input.placeholder = 'Input your name:';
    input.id = 'input';
    input.oninput = function(e) {
        // console.log(e);
        if (input.value) {
            div.className = 'button button-in';
        } else {
            div.className = 'button';
        }
    }
    document.body.appendChild(input);

    var div = document.createElement('div');
    div.onclick = function () {
        // alert('这是你的🎄链接：https://mfoonirlee.github.io/MerryXmas/index.html?name=' + str_encrypt(input.value));
        location.href = 'https://mfoonirlee.github.io/MerryXmas/index.html?name=' + str_encrypt(input.value);
    }
    div.innerHTML = 'Get Tree!';
    div.className = 'button';
    div.id = div;
    document.body.appendChild(div);
    

    function shuffleNumbers(numbersArray){
        let len = numbersArray && numbersArray.length,
            i = len, j, temp, arr = numbersArray.slice();
        if(i == 0)return;
        while(--i){
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    var text = 'Dear my friends: \n Merry Christmas! \n Yours @boltCat';
    var html = '<p>';
    var len = text.split('').length;
    var arr = [];
    var i = 0;
    for(;i < len; i++){
        arr.push(i);
    }
    arr = shuffleNumbers(arr);
    text.split('').forEach(function(val, i){
        var styles = '';
        var delay = 'animation-delay: ' + arr[i] / 2 + 's;';
        var dur = 'animation-duration: ' + (Math.floor(Math.random() * 4) + 1) + 's;'; 
        styles += delay + dur;

        if (val == '\n') {
            html += '<p/><p>';
        } else {
            html += '<span style="' + styles +'" class="alBet shining">' + val + '</span>';
        }
    });

    var words = document.createElement('div');
    words.className = "al-wrapper";
    words.innerHTML = html;
    document.body.appendChild(words);

    var snowNum = 100;
    for (let i = 0; i < snowNum; i++) {
        new Snow();
    }
})();

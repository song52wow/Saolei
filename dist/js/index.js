let _saolei = document.getElementById('saolei'),
    _Div,
    _span;


let mine = {
    square: [5, 5], // 定义方格数量，x， y
    bomb: 5, // 定义雷的数量
    init: function() {
        this.squareInit();

        _saolei.onclick = function(ev) {
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if (target.nodeName.toLowerCase() === 'span') {
                target.className = 'number'
                target.innerHTML = '1'
            }
        }

    },
    //  总格数
    grid: function() {
        return this.square[0] * this.square[1];
    },
    //  存储地雷随机落地数
    bombMath: function() {
        let len = this.grid() - 1,
            bombNum = [];
        for (let i = 0; i < this.bomb; i++) {
            bombNum.push(Math.floor(Math.random() * (len - 1 + 1) + 1));
        }
        console.log(bombNum);
        return bombNum;
    },
    squareInit: function() {
        for (let i = 1; i <= this.square[1]; i++) {
            _Div = document.createElement('div');
            _saolei.append(_Div);
            for (let j = 1; j <= this.square[0]; j++) {
                _Div.append(document.createElement('span'));
            }
        }
        let range = this.bombMath();
        _span = _saolei.getElementsByTagName('span');
        range.map(function(val) {
            _span[val].innerHTML = 'B';
            _span[val].className = 'boom';
        })
    }
}


mine.init();

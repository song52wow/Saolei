let _saolei = document.getElementById('saolei'),
    _Div,
    bombNum = [],
    bom2 = [],
    numXY = [],
    total = [];

let mine = {
    square: [20, 20], // 定义方格数量，x， y
    bomb: 20, // 定义雷的数量
    init: function() {
        this.squInit();
        _saolei.onclick = function(ev) {
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if (target.nodeName.toLowerCase() === 'span') {
                let _span = _saolei.getElementsByTagName('span');
                _index = index(_span, target)
                if (bom2.indexOf(_index) >= 0) {
                    mine.show();
                } else if (numXY.indexOf(_index) >= 0) {
                    _span[_index].innerHTML = total[numXY.indexOf(_index)];
                    _span[_index].className = 'number';
                } else {
                    _span[_index].className = 'blank';
                }

            }
        }

    },
    //  总格数
    grid: function() {
        return this.square[0] * this.square[1];
    },
    // 生成格子
    squInit: function() {
        for (let i = 1; i <= this.square[1]; i++) {
            _Div = document.createElement('div');
            _Div.className = 'sqDiv';
            _saolei.appendChild(_Div);
            for (let j = 1; j <= this.square[0]; j++) {
                _Div.appendChild(document.createElement('span'));
            }
        }
        _Div = document.getElementsByClassName('sqDiv');
        this.bombMath();
        this.check();
    },
    //  存储地雷随机落地数
    bombMath: function() {
        let len = this.grid() - 1;
        for (let i = 0; i < this.bomb; i++) {
            let math = Math.floor(Math.random() * (len - 1 + 1) + 1);
            if (bom2.indexOf(math) >= 0) {
                i--
                continue
            }
            bom2.push(math);
            mathX = Math.floor(math % this.square[0]),
                mathY = Math.floor((math - mathX) / this.square[0]);
            bombNum.push([mathX, mathY]);
        }
    },
    check: function() {
        const sqX = this.square[0],
            sqY = this.square[1];
        let num = 0;
        for (let i = 0; i < sqX; i++) {
            for (let j = 0; j < sqY; j++) {
                num = 0;
                for (let b = 0; b < bombNum.length; b++) {
                    if (i === bombNum[b][0] && j === bombNum[b][1]) {
                        continue;
                    }
                    for (let m = j - 1; m <= j + 1; m++) {
                        for (let n = i - 1; n <= i + 1; n++) {
                            if (n === bombNum[b][0] && m === bombNum[b][1]) {
                                num++;
                                numXY.push(j * this.square[0] + i);
                                total.push(num);
                                break;
                            }
                        }
                    }
                }
            }
        }
        // numXY.sort(function(a, b) {
        //     return a - b;
        // })
    },
    // 展示全部
    show: function() {
        let _span = _saolei.getElementsByTagName('span');
        for (let i = 0; i < _span.length; i++) {
            _span[i].className = 'blank';
        }
        for (let i = 0; i < numXY.length; i++) {
            _span[numXY[i]].innerHTML = total[i];
            _span[numXY[i]].className = 'number';
        }
        for (let i = 0; i < bombNum.length; i++) {
            spanAdd(bombNum[i][1], bombNum[i][0], 'B', 'boom');
        }
    }
};
mine.init();

function spanAdd(oI, oJ, iHtml, cName) {
    let _span = _Div[oI].getElementsByTagName('span');
    _span[oJ].innerHTML = iHtml;
    _span[oJ].className = cName;
}

function index(obj, dq) {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i] === dq) {
            return i;
        }
    }
}

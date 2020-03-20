var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var h_mise = Paper.image('img/h_mise.jpg', 0, 0, 110, 90).toDefs();
var hidari = Paper.image('img/hidari.png', 0, 0, 25, 23).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 33, 25).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 페이지 이동
var topBox = Paper.g();

topBox.path('M1 45 L359 45 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#ECECEC'
});

hidari.use().transform('t16, 11').click(handlerPre).appendTo(topBox).attr({
  'cursor': 'pointer'
});

function handlerPre() {
  location.replace('NABH01.html');
}

migi.use().transform('t315, 10').click(handlerAft).appendTo(topBox).attr({
  'cursor': 'pointer'
});

function handlerAft() {
  location.replace('h_35_mu.html');
}

// 상단
var topArea = Paper.g();

// 행
topArea.text(22, 87, 'あ').click(handler01).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler01() {
  location.replace('h_03_aa.html');
}

topArea.text(22, 137, 'か').click(handler02).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler02() {
  location.replace('h_08_ka.html');
}

topArea.text(22, 187, 'さ').click(handler03).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler03() {
  location.replace('h_13_sa.html');
}

topArea.text(22, 237, 'た').click(handler04).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler04() {
  location.replace('h_18_ta.html');
}

topArea.text(22, 287, 'な').click(handler05).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler05() {
  location.replace('h_23_na.html');
}

topArea.text(22, 337, 'は').click(handler06).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler06() {
  location.replace('h_28_ha.html');
}

topArea.text(22, 437, 'や').click(handler07).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler07() {
  location.replace('h_38_ya.html');
}

topArea.text(22, 487, 'ら').click(handler08).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler08() {
  location.replace('h_41_ra.html');
}

topArea.text(22, 537, 'わ').click(handler09).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler09() {
  location.replace('h_46_wa.html');
}

topArea.text(22, 587, 'ん').click(handler10).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler10() {
  location.replace('h_48_nn.html');
}

// 행의 해당 문자
topArea.circle(30, 380, 20).attr({
  'fill': '#ececec',
  'stroke-width': 2
});
topArea.text(22, 387, 'ま').click(hanlderLine).attr({
  'font-size': 20,
  'font-weight': 'bold',
  'cursor': 'pointer'
});

function hanlderLine() {
  location.replace('h_33_ma.html');
}

// 라인
topArea.line(62, 60, 62, 600).attr({
  'stroke': 'gray',
  'stroke-dasharray': '10 5'
});

// 하단
var bottomArea = Paper.g();

// 단
bottomArea.circle(105, 80, 20).click(hadlerMa).attr({
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});
bottomArea.text(97, 87, 'ま').click(hadlerMa).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});
function hadlerMa() {
  location.replace('h_33_ma.html');
}

bottomArea.circle(158, 80, 20).attr({
  'fill': '#FCF5D4',
  'stroke': '#A1D8C8',
  'stroke-width': 3
});
bottomArea.text(150, 87, 'み').attr({
  'font-size': 20,
  'font-weight': 'bold'
});

bottomArea.circle(211, 80, 20).click(hadlerMu).attr({
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});
bottomArea.text(203, 87, 'む').click(hadlerMu).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});
function hadlerMu() {
  location.replace('h_35_mu.html');
}

bottomArea.circle(264, 80, 20).click(hadlerMe).attr({
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});
bottomArea.text(256, 87, 'め').click(hadlerMe).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});
function hadlerMe() {
  location.replace('h_36_me.html');
}

bottomArea.circle(317, 80, 20).click(hadlerMo).attr({
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});
bottomArea.text(309, 87, 'も').click(hadlerMo).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});
function hadlerMo() {
  location.replace('h_37_mo.html');
}

// 학습 문자
bottomArea.circle(211, 235, 80).click(playAud01).attr({
  'stroke': '#A1D8C8',
  'stroke-width': 8,
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});

bottomArea.text(171, 270, 'み').click(playAud01).attr({
  'font-size': 100,
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/aud_34_mi.wav');
  audio1.play();
}

// 단어
bottomArea.rect(100, 400, 222, 170, 5).attr({
  'stroke': '#A1D8C8',
  'stroke-width': 3,
  'fill': 'white'
});

h_mise.use().transform('t130 420').click(playAud02).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t12 = bottomArea.text(200, 550, ['み', 'せ', '가게']).click(playAud02).attr({
  'font-size': 25,
  'cursor': 'pointer'
});
t12.selectAll('tspan')[1].attr({
  x: 223,
  'fill': 'gray'
});
t12.selectAll('tspan')[2].attr({
  x: 260,
  'font-size': 22
});

function playAud02() {
  var audio2 = new Audio('aud/aud_34_mise.wav');
  audio2.play();
}

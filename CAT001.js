var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var hoi = Paper.image('hoi.png', 0, 0, 35, 35).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

hoi.use().transform('t10, 15').appendTo(topBox);
topBox.text(53, 40, '가등급 50자').attr({
    'font-size': 18,
    'font-weight': 'bold',
});


// 상단
var topArea = Paper.g();

topArea.path('M90,65 L165,65 A18,18 0 0,1 185,85 L185,105 L70,105 L70,85 A18,18 0 0,1 90,65').attr({
    'fill': 'teal',
    'opacity': '0.2',
    'stroke': 'none'
});
topArea.text(100, 93, '1~5세트').click(handlerCard1).attr({
    'font-size': 18,
    'font-weight': 'bold',
    'cursor': 'pointer'
});

topArea.path('M215,65 L290,65 A18,18 0 0,1 310,85 L310,105 L195,105 L195,85 A18,18 0 0,1 215,65').attr({
    'fill': '#FADCB9',
    'opacity': '0.6',
    'stroke': 'none'
});
topArea.text(221, 93, '6~10세트').click(handlerCard2).attr({
    'font-size': 18,
    'fill': 'gray',
    'cursor': 'pointer'
});
topArea.line(40, 105, 340, 105).attr({
    'stroke': 'gray',
    'stroke-width': '1pt'
});

function handlerCard1() {
    location.replace('CAT001.html');
}

function handlerCard2() {
    location.replace('CAT002.html');
}

// 한자
var bottomArea = Paper.g();

for (var i = 0; i < 5; i++) {
    bottomArea.rect(8, (i * 100) + 130, 25, 60).attr({
        'fill': 'teal',
        'opacity': '0.2'
    });
    bottomArea.rect(40, (i * 100) + 130, 300, 60, 5).attr({
        'fill': '#f1f3f4'
    });
}

bottomArea.text(12, 165, '01').attr({
    'font-size': 15,
});
bottomArea.text(12, 265, '02').attr({
    'font-size': 15,
});
bottomArea.text(12, 365, '03').attr({
    'font-size': 15,
});
bottomArea.text(12, 465, '04').attr({
    'font-size': 15,
});
bottomArea.text(12, 565, '05').attr({
    'font-size': 15,
});


var hanjaChoices = Paper.g();

hanjaChoices.text(55, 170, data[0].hanja).click(handler05).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 170, data[1].hanja).click(handler06).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 170, data[2].hanja).click(handler07).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 170, data[3].hanja).click(handler08).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 170, data[4].hanja).click(handler09).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(55, 270, data[5].hanja).click(handler10).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 270, data[6].hanja).click(handler11).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 270, data[7].hanja).click(handler12).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 270, data[8].hanja).click(handler13).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 270, data[9].hanja).click(handler14).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(55, 370, data[10].hanja).click(handler15).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 370, data[11].hanja).click(handler16).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 370, data[12].hanja).click(handler17).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 370, data[13].hanja).click(handler18).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 370, data[14].hanja).click(handler19).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(55, 470, data[15].hanja).click(handler20).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 470, data[16].hanja).click(handler21).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 470, data[17].hanja).click(handler22).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 470, data[18].hanja).click(handler23).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 470, data[19].hanja).click(handler24).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(55, 570, data[20].hanja).click(handler25).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 570, data[21].hanja).click(handler26).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 570, data[22].hanja).click(handler27).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 570, data[23].hanja).click(handler28).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 570, data[24].hanja).click(handler29).attr({
    'font-size': 32,
    'cursor': 'pointer'
});


// 핸들러 함수
function handler05() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[0].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio1 = new Audio('aud/aud_01.wav');
    audio1.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler06() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[1].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio2 = new Audio('aud/aud_02.wav');
    audio2.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler07() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[2].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio3 = new Audio('aud/aud_03.wav');
    audio3.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler08() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[3].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio4 = new Audio('aud/aud_04.wav');
    audio4.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler09() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[4].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio5 = new Audio('aud/aud_05.wav');
    audio5.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler10() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[5].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio6 = new Audio('aud/aud_06.wav');
    audio6.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler11() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[6].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio7 = new Audio('aud/aud_07.wav');
    audio7.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler12() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[7].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio8 = new Audio('aud/aud_08.wav');
    audio8.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler13() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[8].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio9 = new Audio('aud/aud_09.wav');
    audio9.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler14() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[9].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio10 = new Audio('aud/aud_10.wav');
    audio10.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler15() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[10].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio11 = new Audio('aud/aud_11.wav');
    audio11.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler16() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[11].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio12 = new Audio('aud/aud_12.wav');
    audio12.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler17() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[12].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio13 = new Audio('aud/aud_13.wav');
    audio13.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler18() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[13].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio14 = new Audio('aud/aud_14.wav');
    audio14.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler19() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[14].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio15 = new Audio('aud/aud_15.wav');
    audio15.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler20() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[15].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio16 = new Audio('aud/aud_16.wav');
    audio16.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler21() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[16].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio17 = new Audio('aud/aud_17.wav');
    audio17.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler22() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[17].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio18 = new Audio('aud/aud_18.wav');
    audio18.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler23() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[18].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio19 = new Audio('aud/aud_19.wav');
    audio19.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler24() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[19].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio20 = new Audio('aud/aud_20.wav');
    audio20.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}


function handler25() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[20].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio21 = new Audio('aud/aud_21.wav');
    audio21.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler26() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[21].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio22 = new Audio('aud/aud_22.wav');
    audio22.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler27() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[22].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio23 = new Audio('aud/aud_23.wav');
    audio23.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler28() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[23].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio24 = new Audio('aud/aud_24.wav');
    audio24.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler29() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#D5E9E2'
    });
    group.text(180, 350, data[24].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio25 = new Audio('aud/aud_25.wav');
    audio25.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

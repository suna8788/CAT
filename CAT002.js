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
    'fill':'gray',
    'cursor': 'pointer'
});


topArea.path('M215,65 L290,65 A18,18 0 0,1 310,85 L310,105 L195,105 L195,85 A18,18 0 0,1 215,65').attr({
    'fill': '#FADCB9',
    'opacity': '0.6',
    'stroke': 'none'
});
topArea.text(220, 93, '6~10세트').click(handlerCard2).attr({
    'font-size': 18,
    'font-weight' : 'bold',
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
    bottomArea.rect(8, (i * 100) + 130, 25, 60, 5).attr({
        'fill': '#FADCB9',
        'opacity': '0.6',
    });
    bottomArea.rect(40, (i * 100) + 130, 300, 60, 5).attr({
        'fill': '#f1f3f4'
    });
}
bottomArea.text(12, 165, '06').attr({
    'font-size': 15,
});
bottomArea.text(12, 265, '07').attr({
    'font-size': 15,
});
bottomArea.text(12, 365, '08').attr({
    'font-size': 15,
});
bottomArea.text(12, 465, '09').attr({
    'font-size': 15,
});
bottomArea.text(12, 565, '10').attr({
    'font-size': 15,
});


var hanjaChoices = Paper.g();

hanjaChoices.text(55, 170, data[25].hanja).click(handler05).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 170, data[26].hanja).click(handler06).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 170, data[27].hanja).click(handler07).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 170, data[28].hanja).click(handler08).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 170, data[29].hanja).click(handler09).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(55, 270, data[30].hanja).click(handler10).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 270, data[31].hanja).click(handler11).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 270, data[32].hanja).click(handler12).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 270, data[33].hanja).click(handler13).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 270, data[34].hanja).click(handler14).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(55, 370, data[35].hanja).click(handler15).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 370, data[36].hanja).click(handler16).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 370, data[37].hanja).click(handler17).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 370, data[38].hanja).click(handler18).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 370, data[39].hanja).click(handler19).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(55, 470, data[40].hanja).click(handler20).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 470, data[41].hanja).click(handler21).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 470, data[42].hanja).click(handler22).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 470, data[43].hanja).click(handler23).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 470, data[44].hanja).click(handler24).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(55, 570, data[45].hanja).click(handler25).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(115, 570, data[46].hanja).click(handler26).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(175, 570, data[47].hanja).click(handler27).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(235, 570, data[48].hanja).click(handler28).attr({
    'font-size': 32,
    'cursor': 'pointer'
});

hanjaChoices.text(295, 570, data[49].hanja).click(handler29).attr({
    'font-size': 32,
    'cursor': 'pointer'
});


// 핸들러 함수
function handler05() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[25].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio26 = new Audio('aud/aud_26.wav');
    audio26.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler06() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[26].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio27 = new Audio('aud/aud_27.wav');
    audio27.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler07() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[27].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio28 = new Audio('aud/aud_28.wav');
    audio28.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler08() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[28].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio29 = new Audio('aud/aud_29.wav');
    audio29.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler09() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[29].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio30 = new Audio('aud/aud_30.wav');
    audio30.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler10() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[30].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio31 = new Audio('aud/aud_31.wav');
    audio31.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler11() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[31].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio32 = new Audio('aud/aud_32.wav');
    audio32.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler12() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[32].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio33 = new Audio('aud/aud_33.wav');
    audio33.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler13() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[33].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio34 = new Audio('aud/aud_34.wav');
    audio34.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler14() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[34].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio35 = new Audio('aud/aud_35.wav');
    audio35.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler15() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[35].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio36 = new Audio('aud/aud_36.wav');
    audio36.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler16() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[36].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio37 = new Audio('aud/aud_37.wav');
    audio37.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler17() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[37].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio38 = new Audio('aud/aud_38.wav');
    audio38.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler18() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[38].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio39 = new Audio('aud/aud_39.wav');
    audio39.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler19() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[39].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio40 = new Audio('aud/aud_40.wav');
    audio40.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler20() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[40].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio41 = new Audio('aud/aud_41.wav');
    audio41.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler21() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[41].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio42 = new Audio('aud/aud_42.wav');
    audio42.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler22() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[42].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio43 = new Audio('aud/aud_43.wav');
    audio43.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler23() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[43].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio44 = new Audio('aud/aud_44.wav');
    audio44.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler24() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[44].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio45 = new Audio('aud/aud_45.wav');
    audio45.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}


function handler25() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[45].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio46 = new Audio('aud/aud_46.wav');
    audio46.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler26() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[46].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio47 = new Audio('aud/aud_47.wav');
    audio47.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler27() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[47].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio48 = new Audio('aud/aud_48.wav');
    audio48.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler28() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[48].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio49 = new Audio('aud/aud_49.wav');
    audio49.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler29() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#FADCB9'
    });
    group.text(180, 350, data[49].mean).attr({
        'fill': 'black',
        'font-size': 50,
        'text-anchor': 'middle'
    });

    var audio50 = new Audio('aud/aud_50.wav');
    audio50.play();

    setTimeout(function() {
        group.remove();
    }, 1000);
}

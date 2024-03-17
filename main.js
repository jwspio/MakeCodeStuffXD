let ewq = 0;
let x = 0;

input.onButtonPressed(Button.A, function () {
    ewq += 1;
})


function pinoyHenyo () {
    if (ewq == 1) {
        basic.showString("BEGIN!")
    }
    if (ewq == 2) {
        basic.clearScreen()
        basic.showString("DOG")

        input.onButtonPressed(Button.B, function () {
            x += 1;
        })
    }
    if (ewq == 3) {
        basic.clearScreen()
        basic.showString('COW')

        input.onButtonPressed(Button.B, function () {
            x += 1;
        })
    }
    if (ewq == 4) {
        basic.clearScreen()
        basic.showString("SNAIL")

        input.onButtonPressed(Button.B, function () {
            x += 1;
        })
    }
    if (ewq == 5) {
        basic.clearScreen()
        basic.showString('CAT')

        input.onButtonPressed(Button.B, function () {
            x += 1;
        })
    }
    if (ewq == 6) {
        basic.clearScreen()
        basic.showString("MOOSE")

        input.onButtonPressed(Button.B, function () {
            x += 1;
        })
    }
    if (ewq == 7) {
        basic.clearScreen()
        basic.showString('!!!!!')

        if (x >= 3) {
            basic.showString('WINNER!')
        }
        if (x <= 3) {
            basic.showString('GAME OVER :(')
        }
 
        ewq = 0;
        
    }
}

basic.forever(function () {
    pinoyHenyo()
})



/*
function idk () {
    if (ewq == 1) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
        ewq -= 1;
    }
}

basic.forever(function () {
    idk()
})
*/




/*
function idk () {
    basic.showString("hello")
    basic.showString("my")
    basic.showString("name")
    basic.showString("is")
    basic.showString("Joseph")
    basic.showString("and")
    basic.showString("i")
    basic.showString("am")
    basic.showString("15")
    basic.showString("years")
    basic.showString("old")
}

basic.forever(function () {
    idk()
})

*/










/*
function ledActiv () {
    if (ewq == 1) {
        basic.clearScreen();
        led.plot(0, 0)
    }
    if (ewq == 2) {
        basic.clearScreen();
        led.plot(0, 1)
    }
    if (ewq == 3) {
        basic.clearScreen();
        led.plot(1, 1)
    }
    if (ewq == 4) {
        basic.clearScreen();
        led.plot(4, 4)
    }
    if (ewq == 5) {
        basic.clearScreen();
        led.plot(3, 3)
    }
    if (ewq == 6) {
        basic.clearScreen();
        led.plot(4, 4)
        led.plot(0,0)
        led.plot(0, 4)
        led.plot(4, 0)
    }
    if (ewq == 7) {
        basic.clearScreen();
        led.plot(2, 2)
    }
    if (ewq == 8) {
        basic.clearScreen();
        led.plot(4, 4)
        led.plot(0, 0)
        led.plot(0, 4)
        led.plot(4, 0)
        led.plot(4, 4)
        led.plot(0, 4)
    }
    if (ewq == 9) {
        basic.clearScreen();
        led.plot(4, 4)
        led.plot(0, 4)
    }
    if (ewq == 10) {
        basic.clearScreen();
        led.plot(4, 4)
        led.plot(0, 0)
        led.plot(0, 4)
        led.plot(4, 0)
        led.plot(4, 4)
        led.plot(0, 4)
    }
    if (ewq == 11) {
        basic.clearScreen();
        led.plot(0, 0)
        led.plot(4, 0)
    }

    if (ewq == 12) {
        basic.clearScreen();
        led.plot(4, 4)
        led.plot(0, 0)
        led.plot(0, 4)
        led.plot(4, 0)
        led.plot(4, 4)
        led.plot(0, 4)
    }
    if (ewq == 13) {
        basic.clearScreen();
        led.plot(4, 0)
        led.plot(3,0)
        led.plot(2,0)
        led.plot(1,0)
        led.plot(0, 0)
    }
    if (ewq == 14) {
        basic.clearScreen();
        led.plot(2, 2)
    }
    if (ewq == 15) {
        basic.clearScreen();
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 4)
    }
    if (ewq == 16) {
        basic.clearScreen();
        basic.showIcon(IconNames.Happy)
    }
}

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    ewq = 0
})


basic.forever(function () {
    ledActiv()
})
*/

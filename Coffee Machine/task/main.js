const input = require('sync-input');

function buyMenu() {
    console.log(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - surprise me !, back - to main menu: `);
    let userAction = input('> ');
    switch (userAction) {
        case '1':
            coffeeMachine.makeCoffee(1);
            break;
        case '2':
            coffeeMachine.makeCoffee(2);
            break;
        case '3':
            coffeeMachine.makeCoffee(3);
            break;
        case '4':
            coffeeMachine.makeCoffee(Math.ceil(Math.random() * 3));
            break;
        case 'back':
            welcomeMenu();
            break;
        default:
            console.log(`Unknown action\n`);
            buyMenu();
    }
}

const coffeeMachine = {
    water: 400,
    milk: 540,
    coffee: 120,
    disposableCups: 9,
    money: 550,
    fillSupplies() {
        coffeeMachine.water += Number(input(`Write how many ml of water you want to add: `));
        coffeeMachine.milk += Number(input(`Write how many ml of milk you want to add: `));
        coffeeMachine.coffee += Number(input(`Write how many grams of coffee beans you want to add: `));
        coffeeMachine.disposableCups += Number(input(`Write how many disposable cups you want to add: `));
    },
    makeCoffee(number) {
        switch (number) {
            case 1:
                if (coffeeMachine.water >= 250 && coffeeMachine.coffee >= 16 && coffeeMachine.disposableCups >= 1) {
                    coffeeMachine.water -= 250;
                    coffeeMachine.coffee -= 16;
                    coffeeMachine.disposableCups -= 1;
                    coffeeMachine.money += 4;
                    console.log(`You have bought 1 espresso\n`);
                    welcomeMenu();
                }
                else {
                    console.log(`Sorry, not enough resources!\n`);
                }
                break;
            case 2:
                if (coffeeMachine.water >= 350 && coffeeMachine.milk >= 75 && coffeeMachine.coffee >= 20 && coffeeMachine.disposableCups >= 1) {
                    coffeeMachine.water -= 350;
                    coffeeMachine.milk -= 75;
                    coffeeMachine.coffee -= 20;
                    coffeeMachine.disposableCups -= 1;
                    coffeeMachine.money += 7;
                    console.log(`You have bought 1 latte\n`);
                    welcomeMenu();
                }
                else {
                    console.log(`Sorry, not enough resources!\n`);
                    welcomeMenu();
                }
                break;
            case 3:
                if (coffeeMachine.water >= 200 && coffeeMachine.milk >= 100 && coffeeMachine.coffee >= 12 && coffeeMachine.disposableCups >= 1) {
                    coffeeMachine.water -= 200;
                    coffeeMachine.milk -= 100;
                    coffeeMachine.coffee -= 12;
                    coffeeMachine.disposableCups -= 1;
                    coffeeMachine.money += 6;
                    console.log(`You have bought 1 cappuccino\n`);
                    welcomeMenu();
                }
                else {
                    console.log(`Sorry, not enough resources!\n`);
                }
                break;
            default:
                console.log(`Unknown action\n`);
                break;
        }
    }
}

function welcomeMenu() {
    console.log(`The coffee machine has: `);
    console.log(`${coffeeMachine.water} ml of water`);
    console.log(`${coffeeMachine.milk} ml of milk`);
    console.log(`${coffeeMachine.coffee} g of coffee beans`);
    console.log(`${coffeeMachine.disposableCups} disposable cups`);
    console.log(`$${coffeeMachine.money} of money`);
    console.log(`\nWrite action (buy, fill, take, remaining, exit): `);
    let userAction = input('> ');
    switch (userAction) {
        case 'buy':
            buyMenu();
            break;
        case 'fill':
            coffeeMachine.fillSupplies();
            welcomeMenu();
            break;
        case 'take':
            console.log(`I gave you $${coffeeMachine.money}\n`);
            coffeeMachine.money = 0;
            welcomeMenu();
            break;
        case 'remaining':
            welcomeMenu();
            break;
        case 'exit':
            break;
        default:
            console.log(`Unknown action\n`);
            welcomeMenu();
            break;
    }
}

welcomeMenu();
// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun(); // Output: This Saturday, I want to roller-skate!
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
mondayWork(); //Output: This Monday, I will go to the office.
function wrapAdjective(symbol = '*') {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}

import * as plans from './plans/815.json';

const plan = (<any>(plans));


let input = {
    name : "rajesh",
    sa : 500000,
    age : 18,
    term : 21,
    plan : 815,
    dab : true
}

const saRebate = (high, per ) => {

}
const modeRebate = (perm, per, mode) => {

}
const calculatePrem = (input) => {
    let selectedPlan = plan[input.plan];
    console.log('selected plan : ', selectedPlan.plan);
}
let jsonOutput = calculatePrem(input);
console.log('Premium details : ' , jsonOutput);
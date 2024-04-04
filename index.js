let fullOp = '';

function number(num) {
    fullOp += num;
    render();
}
function operation(op) {
    fullOp += op;
}
function del() {
    fullOp = '';
    render();
}
function render() {
    document.getElementById('display').innerHTML = fullOp;
}
function solve() {
    document.getElementById('display').innerHTML = eval(fullOp);
    document.getElementById('result').innerHTML += eval(fullOp)+'<br>';
    fullOp = eval(fullOp);
}
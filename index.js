let fullOp = '';

function number(num) {
    fullOp += num;
    render();
}
function operation(op) {
    fullOp += op;
}

function render() {
    document.getElementById('display').innerHTML = fullOp;
}
function solve() {
    document.getElementById('display').innerHTML = eval(fullOp);
    fullOp = eval(fullOp);
}
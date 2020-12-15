function main() {
    let userName = prompt("Enter your name:");
    let score = prompt("Enter your scores");
    let state = `${userName}'s test was done and you got ${score} points.`;
    //console.log(state);
    push(state);
}

function push(state) {
    history.pushState(state,"","content3.html");
    //console.log(history.state);
    alert(history.state);
}

main();
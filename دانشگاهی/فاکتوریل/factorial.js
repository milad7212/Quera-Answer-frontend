function factorial(n) {
    if (n == 0) {
        return 0;
    }
    let answre = 1;
    for (let i = n; i > 0; i--) {
        answre *= i;
    }
    console.log(answre);
    return answre;
}
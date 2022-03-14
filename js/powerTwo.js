const one = (n) => {
    let ans = 0;
    for (let i = 1; 2 ** i < n; ++i) {
        ans = i
    }

    return 2 ** (ans + 1)
}
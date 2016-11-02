function isPalindrome(input) {
    let text = input[0];
    let isPalindrome = true;
    if (text.length < 1) {
        console.log(false);
        return;
    }

    for (let idx = 0; idx < text.length / 2; ++idx) {
        if (text.charAt(idx) !== text.charAt(text.length - (idx + 1))) {
            isPalindrome = false;
            break;
        }
    }

    console.log(isPalindrome);
}

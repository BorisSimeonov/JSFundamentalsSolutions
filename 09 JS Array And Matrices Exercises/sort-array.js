function solution(input) {
    function biCriteriaSort(a, b) {
        "use strict";
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        if (a.length == b.length) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
    }
    console.log(input.sort(biCriteriaSort).join('\n'));
}

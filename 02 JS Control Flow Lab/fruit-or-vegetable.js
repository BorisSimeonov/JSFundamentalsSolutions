function fruitOrVeg(input) {
    var item = input[0];
    var result = "unknown";

    var fruits = ["banana", "apple", "kiwi", "cherry",
        "lemon", "grapes", "peach"];
    var vegetables = ["tomato", "cucumber",
        "pepper", "onion", "garlic", "parsley"];

    for (let i = 0; i < fruits.length; ++i) {
        if (fruits[i] === item) {
            console.log("fruit");
            return;
        }
    }

    for (let i = 0; i < vegetables.length; ++i) {
        if (vegetables[i] === item) {
            console.log("vegetable");
            return;
        }
    }
    console.log(result);
}

multiplyNode(document.getElementById("htmlscore"), 8, true);
multiplyNode(document.getElementById("cssscore"), 7, true);
multiplyNode(document.getElementById("jsscore"), 6, true);
multiplyNode(document.getElementById("cscore"), 4, true);
multiplyNode(document.getElementById("sqlscore"), 2, true);
multiplyNode(document.getElementById("phpscore"), 1, true);
multiplyNode(document.getElementById("javascore"), 1, true);
multiplyNode(document.getElementById("c++score"), 1, true);


function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

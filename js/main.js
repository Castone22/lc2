
var hello = $(".hello-world")

var options = [
    "<p class='.hello-world ray'> Hello, Ray</p>",
    "<p class='.hello-world oscar'> Hello, Oscar</p>",
    "<p class='.hello-world gwen'> Hello, Gwen</p>",
    "<p class='.hello-world bob'> Hello, Bob</p>",
    "<p class='.hello-world marie'> Hello, Marie</p>"
]

$(document).ready(function(){
    shuffleSort(options).forEach(function(item)
    {
        hello.append(item);
    });
});

function shuffleSort(array){
    return array.sort(function() {return Math.random() * 2 - 1});
}




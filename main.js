var crrtPos = -1;
var colourOptions = ["Medium Sea Green", "Lawn Green",  "Yellow", "Orange", "Light Salmon", "Dark Salmon", "Crimson",
"Blue Violet", "Deep Pink", "Slate Blue", "Steel Blue",  "Deep Sky Blue", "Turquoise", "White", "Light Gray", 
"Gray", "Black", "Brown"];
var colourWheel = document.getElementById("selector");
var detailWheel = document.getElementById("cart_objects")

var quantity = 0;

var reset = function(a)
{
    document.getElementById("colour "+a).style.borderColor = "white";
}

var setColour = function(a)
{
    if(a<0)
    {
            document.getElementById("colour_selected").innerHTML = "";
    }
    else
    {
        if(crrtPos>=0)
        {
            reset;
        }
        document.getElementById("colour_selected").innerHTML = colourOptions[a];
        document.getElementById("colour " + a).style.boderColor = "black";
        document.getElementById("colour " + a).style.borderStyle = "solid"; 
        crrtPos = a;
    }   
}

var create = function(str)
{
    let fragment1 = document.createDocumentFragment();
    let temp = document.createElement("div");
    temp.innerHTML = str;
    while(temp.firstChild)
    {
        fragment1.appendChild(temp.firstChild);
    }
    return fragment1;
}

var convertToColor = function(a){
    let v = colourOptions[a];
    let w = v.split(" ");
    let finalstring = "";
    for(let x = 0; x < w.length; x++){
        finalstring = finalstring + w[x];
    }
    return finalstring;
}

setColour(crrtPos);


if(colourOptions.length < 1){
    let fragment2 = create('<span>None available</span>');
    document.getElementById("selector").appendChild(fragment2);
}
else
{
    for(let i = 0; i < colourOptions.length; i++){
        let colourId = '\"colour ' + i + '\"';
        let fragment2 = create('<div id=' + '"colour ' + i + '" class="colourChunk d-inline" data-toggle="tooltip" data-placement="top" title="' + colourOptions[i] + '"></div>');
        colourWheel.appendChild(fragment2);
        document.getElementById("colour " + i).style.color = convertToColor(i);
        document.getElementById("colour " + i).style.backgroundColor = convertToColor(i);
        document.getElementById("colour " + i).addEventListener("click", function(){ setColour(i)});
    }
}

document.getElementById("updateCartBtn").addEventListener("click", function()
{
    document.getElementById("modal_colour").innerHTML = colourOptions[crrtPos];
})

document.getElementById("minusBtn").addEventListener("click", function()
{
    quantity = quantity - 1;
    document.getElementById("counter_span").innerHTML = quantity;
});

document.getElementById("plusBtn").addEventListener("click", function()
{
    quantity = quantity + 1;
    document.getElementById("counter_span").innerHTML = quantity;
})

document.getElementById("agreeBtn").addEventListener("click", function()
{
    document.getElementById("quantityCount_div").innerHTML = quantity;
    document.getElementById("updateCartBtn").innerHTML = "Checkout now";

    for(let i = 0; i < quantity; i++){
        let fragment3 = create('<div id=' + '"cartItem ' + i + '" class="colourChunk d-inline" data-toggle="tooltip" data-placement="top" title="' + colourOptions[i] + '"></div>');
        detailWheel.appendChild(fragment3);
        document.getElementById("cartItem " + i).style.color = convertToColor(crrtPos);
        document.getElementById("cartItem " + i).style.backgroundColor = convertToColor(crrtPos);
    }

    document.getElementById("updateCartBtn").disabled = true;
})
var crrtPos = -1;
var colourOptions = ["Medium Sea Green", "Lawn Green",  "Yellow", "Orange", "Light Salmon", "Dark Salmon", "Crimson",
"Blue Violet", "Deep Pink", "Slate Blue", "Steel Blue",  "Deep Sky Blue", "Turquoise", "White", "Light Gray", 
"Gray", "Black", "Brown"];
var colourWheel = document.getElementById("selector");
var detailWheel = document.getElementById("cart_objects")
var cartArr=[];


    shoeMediumSeaGreen = {
        colour : "Medium Sea Green",
        price : 14.99
    };
    shoeLawnGreen = {
        colour : "Lawn Green",
        price : 14.99
    };
    shoeYellow = {
        colour : "Yellow",
        price : 14.99
    };
    shoeOrange = {
        colour : "Orange",
        price : 14.99
    };
    shoeLightSalmon = {
        colour : "Light Salmon",
        price : 69.69
    };
    shoeDarkSalmon = {
        colour : "Dark Salmon",
        price : 4.99
    };
    shoeCrimson = {
        colour : "Crimson",
        price : "$14.99"
    };
    shoeBlueViolet = {
        colour : "Blue Violet",
        price : 14.99
    };
    shoeDeepPink = {
        colour : "Deep Pink",
        price : 14.99
    };
    shoeSlateBlue = {
        colour : "Slate Blue",
        price : 14.99
    };
    shoeSteelBlue = {
        colour : "Steel Blue",
        price : 14.99
    };
    shoeDeepSkyBlue = {
        colour : "Deep Sky Blue",
        price : 14.99
    };
    shoeTurquoise = {
        colour : "Turquoise",
        price : 14.99
    };
    shoeWhite = {
        colour : "White",
        price : 14.99
    };
    shoeLightGray = {
        colour : "Light Gray",
        price : 14.99
    };
    shoeGray = {
        colour : "Gray",
        price : 14.99
    };
    shoeBlack = {
        colour : "Black",
        price : 14.99
    };
    shoeBrown = {
        colour : "Brown",
        price : 14.99
    };

    var shoeArr = [shoeMediumSeaGreen, shoeLawnGreen,  shoeYellow, shoeOrange, shoeLightSalmon, shoeDarkSalmon, shoeCrimson,
        shoeBlueViolet, shoeDeepPink, shoeSlateBlue, shoeSteelBlue,  shoeDeepSkyBlue, shoeTurquoise, shoeWhite, shoeLightGray, 
        shoeGray, shoeBlack, shoeBrown];
     
var quantity = 0;
var totalItems = 0;

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
        document.getElementById("colour_selected").innerHTML = shoeArr[a].colour;
        document.getElementById("colour " + a).style.boderColor = "black";
        document.getElementById("colour " + a).style.borderStyle = "solid"; 
        document.getElementById("netpriceval").innerHTML = "$"+shoeArr[a].price;
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
    let v = a;
    let w = v.split(" ");
    let finalstring = "";
    for(let x = 0; x < w.length; x++){
        finalstring = finalstring + w[x];
    }
    return finalstring;
}

setColour(crrtPos);

if(shoeArr.length < 1){
    let fragment2 = create('<span>None available</span>');
    document.getElementById("selector").appendChild(fragment2);
}
else
{
    for(let i = 0; i < shoeArr.length; i++){
        let fragment2 = create('<div id=' + '"colour ' + i + '" class="colourChunk d-inline" data-toggle="tooltip" data-placement="top" title="' + colourOptions[i] + '"></div>');
        colourWheel.appendChild(fragment2);
        document.getElementById("colour " + i).style.color = convertToColor(shoeArr[i].colour);
        document.getElementById("colour " + i).style.backgroundColor = convertToColor(shoeArr[i].colour);
        document.getElementById("colour " + i).addEventListener("click", function(){ setColour(i)});
    }
}

document.getElementById("updateCartBtn").addEventListener("click", function()
{
    document.getElementById("modal_colour").innerHTML = shoeArr[crrtPos].colour;
})

document.getElementById("minusBtn").addEventListener("click", function()
{
    if(quantity==0)
    {

    }
    else{
        quantity = quantity - 1;
        document.getElementById("counter_span").innerHTML = quantity;
    }
});

document.getElementById("plusBtn").addEventListener("click", function()
{
    quantity = quantity + 1;
    document.getElementById("counter_span").innerHTML = quantity;
})

document.getElementById("agreeBtn").addEventListener("click", function()
{
    document.getElementById("cart_objects").innerHTML = "";
    totalItems = totalItems + quantity;
    for(let j = 0; j < quantity; j++){
        cartArr.unshift(shoeArr[crrtPos]);
    }
    document.getElementById("quantityCount_div").innerHTML = totalItems;
    document.getElementById("counter_span").innerHTML = "0";

    for(let i = 0; i < cartArr.length; i++){
        let fragment3 = create('<div id=' + '"cartItem ' + i + '" class="colourChunk d-inline" data-toggle="tooltip" data-placement="top" title="' + colourOptions[i] + '"></div>');
        detailWheel.appendChild(fragment3);
        document.getElementById("cartItem " + i).style.color = convertToColor(cartArr[i].colour);
        document.getElementById("cartItem " + i).style.backgroundColor = convertToColor(cartArr[i].colour);
    }

    document.getElementById("checkoutBtn").style.display = "block";

})


let j = document.getElementById("recipesList").getElementsByTagName("li");

let liItems = {


};

localStorage.setItem("recipes", JSON.stringify(liItems));

for(let i = 0; i < j.length; i++){
    localStorage.setItem("recipes", JSON.stringify(i));
}

//fetch data
fetch("https://api.myjson.com/bins/gg3eh")
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        else {
            return Promise.reject("something went wrong!")
        }
    })
    .then(data => {
        let myList = $("#recipesList");
        let alt = "alt = 'Recipe Image'";

        $.each(data.recipes, function () {
            let imgNum = Math.floor(Math.random()*3);
            let img = "<img src='images/" + imgNum + ".jpg'" + alt + "/>";

            $("#recipesList").append("<li><article><h2>" + img
                + this.title +
                "</h2><p>"
                + this.description +
                "</p><p>Category: "
                + this.category +
                "</p><p>Star Rating: "
                + Math.floor(this.starRating) +
                "</p><p class='remove'>" +
                "<i class='fa fa-trash' " +
                "onclick='assignDelete(this)'</i>" +
                "</p></article></li>"

            );
        });

    })
    .catch(error => console.log("error is", error));

//click event for adding recipes
let add = document.getElementById("add");

add.addEventListener("click", function () {
    addItem();
});





function recipeList() {
    $("#recipesList").append(
        $('<li><article>').append(
            "<h2>"+
            $("#name").val() + " " +
            "</h2><p>"+
            $("#description").val() + " " +
            "</p><p>"+
            $("#category").val() + " " +
            "</p><i class='fa fa-trash' " +
            "onclick='assignDelete(this);' " +
            "</i>"
        ));
}

function clearForm() {
    $("#name").val("");
    $("#description").val("");
    $("#category").val("");
}

function addItem() {
    if ($("#name, #description, #category").val() !== null && $("#name, #description, #category").val() !== '') {

        recipeList();

        clearForm();

        $("#name").focus();

    }
}

function assignDelete(deleteItem) {
    $(deleteItem).parents("li").remove();
}



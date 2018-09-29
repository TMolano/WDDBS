$.fn.alert = function () {
    this.css("background-color", "blue");
    this.css("display", "block");
    $("#alertModal").fadeOut(5000);
};

$.fn.success = function () {
    this.css("background-color", "green");
    this.css("display", "block");
    $("#successModal").fadeOut(5000);
};

$.fn.warning = function () {
    this.css("background-color", "orange");
    this.css("display", "block");
    $("#warningModal").fadeOut(5000);
};

$.fn.error = function () {
    this.css("background-color", "red");
    this.css("display", "block");
    $("#errorModal").fadeOut(5000);
};
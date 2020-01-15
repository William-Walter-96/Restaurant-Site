document.getElementById("javascriptEnabled").style.display = "none";

function checkErrors() {
    if (document.forms["form"]["name"].value == "") {
        alert("Name must be filled in.");
        document.forms["form"]["name"].parentElement.className = "form-group form-inline has-error";
        document.forms["form"]["name"].focus();
        return false;
    }
    if (document.forms["form"]["email"].value == "") {
        alert("Email must be filled in.");
        document.forms["form"]["email"].parentElement.className = "form-group form-inline has-error";
        document.forms["form"]["email"].focus();
        return false;
    }
    if (document.forms["form"]["phone"].value == "") {
        alert("Phone number must be filled in.");
        document.forms["form"]["phone"].parentElement.className = "form-group form-inline has-error";
        document.forms["form"]["phone"].focus();
        return false;
    }
    if ((!document.getElementById("contactYoum").checked)
        && (!document.getElementById("contactYout").checked)
        && (!document.getElementById("contactYouw").checked)
        && (!document.getElementById("contactYouth").checked)
        && (!document.getElementById("contactYouf").checked)) {
        alert("Please select which day is best to contact you.");
        return false;
    }
    else { return true; }
}

function clearErrors() {
    for (var loopCounter = 0; loopCounter < document.forms["form"].elements.length; loopCounter++) {
        if (document.forms["form"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            document.forms["form"].elements[loopCounter].parentElement.className = "form-group form-inline";
        }
    }
}

function requestSent() {
    clearErrors();
    if (checkErrors()) {
        alert("Thank you for filling out the form. Your request has been sent.");
    }
    return false;
}
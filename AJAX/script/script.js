function getRandomUser () {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
        var elFirstName = document.getElementById("firstName");
        var elLastName = document.getElementById("lastName");
        var eluserImage = document.getElementById("userImages");
        var elphone = document.getElementById("phone");
        var eladdress = document.getElementById("address");
        var elemail = document.getElementById("email");
                
        elFirstName.innerHTML = data.results[0].name.first;
        elLastName.innerHTML = data.results[0].name.last;
        eluserImage.src = data.results[0].picture.large;
        eluserImage.title = data.results[0].name.first + "" + data.results[0].name.last;
        elphone.innerHTML = data.results[0].phone;
        eladdress.innerHTML = data.results[0].location.street.number + ", " + data.results[0].location.street.name + ", <br/>" + data.results[0].location.city + ", <br/>" + data.results[0].location.postcode + ", <br/>" + data.results[0].location.state + ", <br/>" + data.results[0].location.country;
        elemail.innerHTML = data.results[0].email;
        
        }
    }

xhttp.open("GET", "https://randomuser.me/api/", true);
xhttp.send();
}
  
var elGetRandomUser = document.getElementById("getRandomUserBtn");
elGetRandomUser.addEventListener("click", function() {
    getRandomUser();
});
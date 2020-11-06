window.addEventListener("load", function() {
    Getbooking();

});

function Getbooking() {
    let url = 'https://api.sheety.co/2f060e3135104e13a7e97f99301da07b/webDevBooking/booking';
    fetch(url)
    .then((response) => response.json())
    .then(json => {

     // console.log(json.bookings);
      var booking = document.getElementById("booking-list");
      var bookingIds = [];

      for (var i = 0; i < json.booking.length; i++) {
        var gId = json.booking[i].id;
        var gName = json.booking[i].name;
        var gEmail = json.booking[i].email;
        var gPax = json.booking[i].pax;
        var gRemarks = json.booking[i].remarks;
        var buttonId = "delete" + gId;
        
        let row = booking.insertRow(booking.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gEmail;
        row.insertCell(3).innerHTML = gPax;
        row.insertCell(4).innerHTML = gRemarks;
        row.insertCell(5).innerHTML = "<button id='" + buttonId + "'class='btn btn-danger'>Delete</button><br/>";

        
        
        bookingIds.push(buttonId);
        
        
      }
      
      for (let j= 0; j < bookingIds.length; j++) {
        let el = document.getElementById(bookingIds[j]);
        el.addEventListener("click", function() {
          let theId = bookingIds[j].replace("delete", "");
          DeleteBooking(theId);
          
        })
      }
    });
  }

  function DeleteBooking(id) {

    if(confirm("Are you sure you want to delete?")) {  
      let url = 'https://api.sheety.co/2f060e3135104e13a7e97f99301da07b/webDevBooking/booking' + id;
      fetch(url, {
        method: 'DELETE',
      })
        .then((response) => {
          location.reload();
        });

    } else {
        alert("Delete cancelled");
    }

  }
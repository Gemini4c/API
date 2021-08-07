//get button
const button = document.querySelector(".submit");

//listen for click events
button.addEventListener("click", getUsers);

//get users
const getUsers = () => {
    console.log("getting users");
    fetch("https://codjosft-rest-api.herokuapp.com/api/products")
        // fetch("http://localhost/API/backend/User.php")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            alert(data);
        });
};

// $('.submit').click(function (e) {
//   e.preventDefault();

//   $.ajax({
//     type: "get",
//     url: "url",
//     data: "data",
//     dataType: "dataType",
//     success: function (response) {

//     },
//     error: function (response) {

//     }
//   });

// });

// $.ajax({
//   type: "method",
//   url: "url",
//   data: "data",
//   dataType: "dataType",
//   success: function (response) {

//   }
// });
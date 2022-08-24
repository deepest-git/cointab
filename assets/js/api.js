

// var port = null;
// var attempt = 5;

// fetch('/util.json').then(res=>res.json()).then(data=>console.log(port = data.port))

// function submit(){

//   url = 'http://localhost:'+(port == null ? '3000' : port)+'/user/login';

//   let json = {};
//   json.attempt = attempt;
//   json.email = document.getElementById("email").value;
//   json.pswd = document.getElementById("pswd").value;

//   // console.log(JSON.stringify(json));

//   fetch(url,{
//     method : 'POST',
//     // mode : 'no-cors',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body : JSON.stringify(json)
//   })
//   .then(res => res.json())
//   .then(data =>{
//     console.log(data);
//       if(data.success == true){
//         window.location.href = 'http://localhost:3000/user/';
//       }
//       else if (data.success == false){
//         if(data.lock){
//           document.getElementById('warn').innerHTML = 'You are locked till '+data.lock;
//         }
//         else document.getElementById('warn').innerHTML = attempt == 1 ? 'You are locked!' : 'Incorrect credentials. You will be locked for 24Hrs after '+(attempt-1 < 0 ? attempt : --attempt)+' attempts';
//       }
//   });
// }


var ctApp = angular.module('ct-app', []);
ctApp.controller('main-ctlr', function mainCntrlr($scope,$http) {

  $scope.setImage = function setImage() {
    console.log($scope.user);
    $http.post('http://localhost:3000/user/login',$scope.user)
    .then(res=>console.log(res))

    console.log('imageUrl');
  };

  // $scope.phones = [
  //   {
  //     name: 'Nexus S',
  //     snippet: 'Fast just got faster with Nexus S.'
  //   }, {
  //     name: 'Motorola XOOM™ with Wi-Fi',
  //     snippet: 'The Next, Next Generation tablet.'
  //   }, {
  //     name: 'MOTOROLA XOOM™',
  //     snippet: 'The Next, Next Generation tablet.'
  //   }
  // ];
});
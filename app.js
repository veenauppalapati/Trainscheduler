// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDCk4mIUw4OcN8ZhAhDQx_pw0U_qn3dao0",
    authDomain: "rutgersjpd1212.firebaseapp.com",
    databaseURL: "https://rutgersjpd1212.firebaseio.com",
    projectId: "rutgersjpd1212",
    storageBucket: "rutgersjpd1212.appspot.com",
    messagingSenderId: "854309833294"
  };
  firebase.initializeApp(config);

  //CREATE A VARIABLE TO REFERENCE THE FIREBASE
  var database = firebase.database();

  	// EVENT LISTENER on click Submit button
	$("#submitButton").on("click", function(event){
		event.preventDefault()
		
		// retreiving user input values
		var trainSchedule  = {

			trainName: $("#trainName").val().trim(),
			destination: $("#destinationid").val().trim(),
			firstTrainTime: $("#firsttraintimeid").val().trim(),
			frequency: $("#frequency").val().trim(),

		}
		// var x= parseint(person.monthlyRate);
		// console.log(typeof x);
		//we are emptying the input values 
		$(".form-group").val("");
			
		
		// we are pushing it to database
		database.ref().push(person);

	});
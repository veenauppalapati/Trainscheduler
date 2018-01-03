$("document").ready(function(){
	//Initialize Firebase
	var config = {
  apiKey: "AIzaSyCWKwJ_KgtJ_jRfwyiPRU6rm5MXPwfUG3k",
 	authDomain: "train-scheduler-database-a71ff.firebaseapp.com",
  databaseURL: "https://train-scheduler-database-a71ff.firebaseio.com",
  projectId: "train-scheduler-database-a71ff",
  storageBucket: "train-scheduler-database-a71ff.appspot.com",
  messagingSenderId: "406181127381"
 };
 firebase.initializeApp(config);
	//Reference to firebase
	var database = firebase.database();
	//event listener for Submit button
	$("#submitbutton").on("click", function(){
		event.preventDefault();
		//Retriever userInput values
		var train = {
			trainName: $("#trainnameid").val().trim(),
			destination: $("#destinationid").val().trim(),
			firsttrain: $("#firsttraintimeid").val().trim(),
			frequency: $("#frequencyid").val().trim()
		}
		var frequencyNum = parseInt(train.frequency);
		console.log(typeof frequencyNum);
		//empty the input values
		$(".form-control").val("");
		//push the values to firebase
		database.ref().push(train);
	});
});
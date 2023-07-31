// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBi-KsTTeTIGFutmbiTT2roD_Vq15pqiOQ",
  authDomain: "storage-team-f1566.firebaseapp.com",
  databaseURL: "https://storage-team-f1566-default-rtdb.firebaseio.com",
  projectId: "storage-team-f1566",
  storageBucket: "storage-team-f1566.appspot.com",
  messagingSenderId: "116934578743",
  appId: "1:116934578743:web:28f9796d06015d069325b2"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
const database = firebase.database();

// Get a reference to the checkbox element
const checkbox = document.getElementById("myCheckbox");

// Read the data from the Realtime Database and set the checkbox state on page load
database.ref("checkboxState").on("value", function(snapshot) {
    const isChecked = snapshot.val();
    checkbox.checked = isChecked;
});

// Add an event listener to the checkbox
checkbox.addEventListener("change", function() {
    // Get the checkbox state (true for checked, false for unchecked)
    const isChecked = checkbox.checked;

    // Update the data in the Realtime Database
    database.ref("checkboxState").set(isChecked);
});

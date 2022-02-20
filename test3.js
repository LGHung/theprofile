
import {
    getDatabase,
    ref,
    set,
    get,
    child,
    update,
    remove,
  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
  
  const db = getDatabase();
  
  //Variable DOM
  var namebox = document.getElementById("Namebox");
  var rollbox = document.getElementById("Rollbox");
  var secbox = document.getElementById("Secbox");
  var genbox = document.getElementById("Genbox");
  var email_box = document.getElementById("email_box")
  var cccd_box = document.getElementById("cccd_box")

  var cash_box = document.getElementById("cash")

  var insBtn = document.getElementById("Insbtn");
  var selBtn = document.getElementById("Selbtn");
  var updBtn = document.getElementById("Updbtn");
  var delBtn = document.getElementById("Delbtn");
  
  var nameDisplay = document.getElementById("name_display")
  var sdtDisplay = document.getElementById("SDT_display")
  var genderDisplay = document.getElementById("Gender_display")
  var inputphone = document.getElementById("inputphone")
  var inputcash = document.getElementById("inputcash")
  
  
  var profilename = document.getElementById("profile-names")
  var ids = document.getElementById("ids")
  var inputemail = document.getElementById("inputemail")

  function insertData() {
    set(ref(db, "TheStudents/" + rollbox.value), {
      NameOfStd: namebox.value,
      RollNo: rollbox.value,
      Section: secbox.value,
      Gender: genbox.value,
      email : email_box.value,
      cccd : cccd_box.value,

      cashes : cash_box.value,
    })
      .then(() => {
        alert("data stored successfully");
      })
      .catch((error) => {
        alert("unsuccessful, error: " + error);
      });
  }
  
  insBtn.addEventListener("click", insertData);
  
  function selectData() {
    const dbref = ref(db);
  
    get(child(dbref, "TheStudents/" + rollbox.value))
      .then((snapshot) => {
        if (snapshot.exists()) {
          profilename.innerHTML = snapshot.val().NameOfStd;
          ids.innerHTML = snapshot.val().RollNo;
          inputphone.innerHTML = snapshot.val().Section;
          genderDisplay.innerHTML = snapshot.val().Gender;
          inputemail.innerHTML = snapshot.val().email;

          inputcash.innerHTML = snapshot.val().cashes

          // alert(Number(inputcash.innerHTML) + 100)
        } else {
          alert("No data found");
        }
      })
      .catch((error) => {
        alert("unsuccessful, error: " + error);
      });
  }
  
  selBtn.addEventListener("click", selectData);
  
  
  function updateData() {
    update(ref(db, "TheStudents/" + rollbox.value), {
      NameOfStd: namebox.value,
      RollNo: rollbox.value,
      Section: secbox.value,
      Gender: genbox.value,
      email : email_box.value,
      cccd : cccd_box.value,

      cashes : cash_box.value,
    })
      .then(() => {
        alert("data stored successfully");
      })
      .catch((error) => {
        alert("unsuccessful, error: " + error);
      });
  }
  
  updBtn.addEventListener("click", updateData);
  
  function deleteData() {
    remove(ref(db, "TheStudents/" + rollbox.value))
      .then(() => {
        alert("data removed successfully");
      })
      .catch((error) => {
        alert("unsuccessful, error: " + error);
      });
  }
  
  delBtn.addEventListener("click", deleteData);

 
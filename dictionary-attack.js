var wordsList = [];

function init() {
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

function checkPassword() {
  var pw = document.getElementById("pw").value.tolowerCase;
  var dictionary = false;
  for (var attack = 0; attack < wordsList.length; attack++) {
    if (pw == wordsList[attack]) {
      dictionary = true;
    }
  }
  if (dictionary == true) {
    document.getElementById("pw").innerHTML = "Password is not secure";
  }
  else (dictionary == false) {
    document.getElementById("pw").innerHTML = "Password is secure";
  }
  }
}

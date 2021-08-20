function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
function openFuncTab(evt, funcTabName) {
  // Declare all variables
  var i, funcTabcontent, funcTablinks;

  // Get all elements with class="tabcontent" and hide them
  funcTabcontent = document.getElementsByClassName("funcTabcontent");
  for (i = 0; i < funcTabcontent.length; i++) {
    funcTabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  funcTablinks = document.getElementsByClassName("funcTablinks");
  for (i = 0; i < funcTablinks.length; i++) {
    funcTablinks[i].className = funcTablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(funcTabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openMachTab(evt, machTabName) {
    // Declare all variables
    var i, machTabcontent, machTablinks;
  
    // Get all elements with class="tabcontent" and hide them
    machTabcontent = document.getElementsByClassName("machTabcontent");
    for (i = 0; i < machTabcontent.length; i++) {
      machTabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    machTablinks = document.getElementsByClassName("machTablinks");
    for (i = 0; i < machTablinks.length; i++) {
      machTablinks[i].className = machTablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(machTabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

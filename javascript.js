function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  // Create a "close" button and append it to each list item
  var myNodelist = document.getElementsByTagName("LI");
  for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  
  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'INPUT' && ev.target.type === 'checkbox') {
      var li = ev.target.parentElement;
      li.classList.toggle('checked');
    }
  }, false);
  
  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      var li = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      li.appendChild(checkbox);
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      document.getElementById("myUL").appendChild(li);
      document.getElementById("myInput").value = "";
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
      span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  

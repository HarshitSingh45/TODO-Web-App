//  by default open the all reminders tag
document.getElementById('rem-all').click();
//  function to open category reminder div onclick event
function openBox(evt, boxName){
    var i, tablinks, rem_box;
    tablinks=document.getElementsByClassName('dis-rem-box');
    // remove active class from all the div (category)
    for(i=0; i<tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //  set div.display=none for all the div( category)
    rem_box=document.getElementsByClassName('show-rem');
    for(i=0;i<rem_box.length; i++){
        rem_box[i].style.display = "none";
    }
    // set the display - block add active class to the div which user has clicked.
    document.getElementById(boxName).style.display = "block";
    evt.currentTarget.className += " active";
}
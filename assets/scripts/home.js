document.getElementById('rem-all').click();
function openBox(evt, boxName){
    var i, tablinks, rem_box;
    tablinks=document.getElementsByClassName('dis-rem-box');
    for(i=0; i<tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    rem_box=document.getElementsByClassName('show-rem');
    for(i=0;i<rem_box.length; i++){
        rem_box[i].style.display = "none";
    }

    document.getElementById(boxName).style.display = "block";
    evt.currentTarget.className += " active";
}
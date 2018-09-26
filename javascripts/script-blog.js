var i = 0
    for (i = 0; i < data.length; i++) 
        document.getElementsByClassName("picture")[i].innerHTML = "<img src='"+data[i].pic + "'>";
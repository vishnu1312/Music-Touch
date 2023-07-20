


  document.querySelector(".rolex").addEventListener("click", function() {
    var audio = new Audio("see_you_in_hell_rolex.mp3");
    audio.play();
    document.querySelector(".rolex").addEventListener("dblclick", function() {
        if(!audio.paused) {
            audio.pause();
        }
    });
  });

  document.querySelector(".leo").addEventListener("click", function() {
    var audio = new Audio("vijay.mp3");
    audio.play();
    document.querySelector(".leo").addEventListener("dblclick", function() {
       if(!audio.paused) {
        audio.pause();
       }
    });
  });
   var salaar = document.querySelector(".salaar");
  salaar.addEventListener("click", function() {
    var audio = new Audio("Salaar Teaser_128-(DJMaza).mp3");
    audio.play();
    salaar.addEventListener("dblclick", function() {
      if(!audio.paused) {
        audio.pause();
      }
    });
  });

  var rocky = document.querySelector(".rocky");
  rocky.addEventListener("click", function() {
    var audio = new Audio("kgf_interval_bgm.mp3");
    audio.play();
    rocky.addEventListener("dblclick", function() {
      if(!audio.paused) {
        audio.pause();
      }
    /*  rocky.addEventListener("click", function() {
        if(audio.paused) {
         audio.resume();
        }
       });*/
    });
  });

 var ntr =  document.querySelector(".ntr");
   ntr.addEventListener("click", function() {
    var audio = new Audio("NTR30.mp3"); 
    audio.play();
    ntr.addEventListener("dblclick", function() {
     if(!audio.paused) {
      audio.pause();
     }
    ntr.addEventListener("mouseenter", function() {
      if(audio.paused) {
        audio.resume();
      }
    });
    });
  });

  var pushpa = document.querySelector(".pushpa");
  pushpa.addEventListener("click", function() {
    var audio = new Audio("pushpa_rarara_bgm.mp3");
    audio.play();
    pushpa.addEventListener("dblclick", function() {
      if(!audio.paused) {
        audio.pause();
      }
    });
  });

 var rrr =  document.querySelector(".rrr");
 rrr.addEventListener("click", function() {
    var audio = new Audio("rrr_bgm.mp3");
    audio.play();
    rrr.addEventListener("dblclick", function() {
      if(!audio.paused) {
        audio.pause();
      }
    });
  });

 /* document.querySelector("").addEventListener("click", function() {
    var audio = new Audio("");
    audio.play();
  });*/

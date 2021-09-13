let btn = document.querySelector("#btn");
         let sidebar = document.querySelector(".sidebar");
         let searchBtn = document.querySelector(".bx-search");

         btn.onclick = function(){
             sidebar.classList.toggle("active");
         }
         searchBtn.onclick = function(){
             sidebar.classList.toggle("active");
         }
        

    var typed = new Typed('.type', {
            strings:['Developer', 'Programmer','Designer'],
            typeSpeed:100,
            backSpeed:70,
            loop:true,
        });
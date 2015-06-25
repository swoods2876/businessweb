$('nav li ul').hide().removeClass('AboutU','PortF');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(800);
  },
  function () {
    $('ul', this).stop().slideUp(1000);
  }
);

function formValidation()  
{  
    var zip = document.reg.zip; 
    allnumeric(zip);

function allnumeric(zip)
{   
    var numbers = /^[0-9]+$/;  
    if(zip.value.match(numbers))  
    {  
        document.getElementById("msg").innerHTML=("OK &#x2713;");
        msg.style.color="green";
    }  
    
    else
    {  
        msg.innerHTML=("Numbers only please.");
        msg.style.color="red";
    }  
};  
    return false;
};
//mouseover event scrolls html,body to bottom of page
$('#logo').mouseover(function () {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
    return false;
});

//click event returns html,body to the top of the page
$('#logo').click(function () {
    $('html, body').animate({
        scrollTop:0
    }, 'slow');
    return false;
});


   $(document).ready(function() {
   $("#theForm").validate();
   });





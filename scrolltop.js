let mybutton = document.getElementById("top_btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } 
  else 
  {
    mybutton.style.display = "none";
  }
}

function topFunction() 
{
  const scrollToTop = () => 
  {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) 
    {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
  scrollToTop();
}
function smoothScroll(target) {
    var element = document.querySelector(target);
    var position = element.offsetTop;
    window.scrollTo({
    top: position,
    behavior: 'smooth'
    });
  }
  
  window.onscroll = function() { stickyHeader() };

  function stickyHeader() {
      var header = document.getElementById("stickyHeader");
      var section = document.getElementById("section1"); 

      if (window.pageYOffset >= section.offsetTop) {
          header.style.display = "block";
      } else {
          header.style.display = "none";
      }
  }

  function searchWord() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var content = document.getElementById("content").innerHTML;
    var unhighlightedContent = content.replace(/<strong class="highlight">(.*?)<\/strong>/ig, '$1');
    var newContent = unhighlightedContent.replace(new RegExp('(<strong>.*?</strong>)', 'ig'), function(match) {
      return match.replace(new RegExp('(' + searchInput + ')', 'ig'), '<strong class="highlight">$1</strong>');
    });
  
    document.getElementById("content").innerHTML = newContent;
  
    var highlightedElement = document.querySelector('.highlight');
    if (highlightedElement) {
      var scrollOptions = {
        behavior: 'smooth',
        block: 'center', // Scroll to the center of the element
        inline: 'center'
      };
      highlightedElement.scrollIntoView(scrollOptions);
    }
  }
  
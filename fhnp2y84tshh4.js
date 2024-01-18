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
    // Get the search input value and convert it to lowercase
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    
    // Get the content of the element with id "content"
    var content = document.getElementById("content").innerHTML;
    
    // Remove previous highlights
    var unhighlightedContent = content.replace(/<span class="highlight">(.*?)<\/span>/ig, '$1');
    
    // Highlight the new search input
    var newContent = unhighlightedContent.replace(new RegExp('(' + searchInput + ')', 'ig'), '<span class="highlight">$1</span>');
    
    // Update the content of the element with id "content"
    document.getElementById("content").innerHTML = newContent;

    // Scroll to the first occurrence of the highlighted word
    var highlightedElement = document.querySelector('.highlight');
    if (highlightedElement) {
        highlightedElement.scrollIntoView({ behavior: 'smooth' });
    }
}

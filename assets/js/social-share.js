document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.getAttribute('href');
        window.open(url, 'share-window', 'height=450, width=550, top=' + 
          (window.innerHeight / 2 - 225) + ', left=' + 
          (window.innerWidth / 2 - 275) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
      });
    });
  });
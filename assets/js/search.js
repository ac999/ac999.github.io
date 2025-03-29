document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      const postList = document.getElementById('post-list');
      const noResults = document.getElementById('no-results');
      const postItems = postList.querySelectorAll('.post-item');
      
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let matchCount = 0;
        
        postItems.forEach(item => {
          const title = item.querySelector('a').textContent.toLowerCase();
          const categories = Array.from(item.querySelectorAll('.category-tag'))
            .map(cat => cat.textContent.toLowerCase());
          
          // Check if the post title or any category contains the search term
          if (title.includes(searchTerm) || categories.some(cat => cat.includes(searchTerm))) {
            item.style.display = '';
            matchCount++;
          } else {
            item.style.display = 'none';
          }
        });
        
        // Show/hide no results message
        if (matchCount === 0 && searchTerm !== '') {
          noResults.style.display = 'block';
        } else {
          noResults.style.display = 'none';
        }
      });
    }
  });
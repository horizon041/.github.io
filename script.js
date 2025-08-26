<script>
  function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.classList.toggle("active");
  }

  function searchPosts() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => {
      const text = post.textContent.toLowerCase();
      post.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
  }

  function filterPosts(category) {
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => {
      const categories = post.getAttribute('data-category')?.toLowerCase() || '';
      post.style.display = (category === 'All' || categories.includes(category.toLowerCase())) ? 'block' : 'none';
    });
  }

  window.onload = function() {
    filterPosts('All');
    document.getElementById('searchInput')?.addEventListener('input', searchPosts);
  };
</script>

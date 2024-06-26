function saveBlogPost(post) {
  let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  blogPosts.push(post);
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
}

function loadBlogPosts() {
  return JSON.parse(localStorage.getItem("blogPosts")) || [];
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

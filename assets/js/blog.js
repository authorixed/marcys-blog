document.addEventListener("DOMContentLoaded", function () {
  const postsList = document.getElementById("postsList");
  const blogPosts = loadBlogPosts();

  blogPosts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;

    const postAuthor = document.createElement("p");
    postAuthor.textContent = `By: ${post.username}`;

    const postContent = document.createElement("p");
    postContent.textContent = post.content;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postAuthor);
    postDiv.appendChild(postContent);
    postsList.appendChild(postDiv);
  });

  const toggleModeButton = document.getElementById("toggleMode");
  const backButton = document.getElementById("backButton");

  toggleModeButton.addEventListener("click", toggleDarkMode);

  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

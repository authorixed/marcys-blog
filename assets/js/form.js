document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let message = document.getElementById("message");

    if (!username || !title || !content) {
      message.textContent = "Please fill out the entire form!";
      return;
    }

    saveBlogPost({ username, title, content });

    window.location.href = "blog.html";
  });

function loadBlogPosts() {
    const postsContainer = document.getElementById("blog-posts-container");
    const posts = JSON.parse(localStorage.getItem("blogPosts"))||[];

    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const postText = `${post.date} - ${post.title}: ${post.content}`;
        postsContainer.innerHTML += `<p>${postText}</p>`;
    });
    
}

function editPost() {
    const postId = document.getElementById("edit-id").value.trim();
    
    if (postId == "") {
        alert("Please enter a valid post ID.");
        return;
    }

    window.location.href = `post.html?id=${postId}`;
}
window.onload = loadBlogPosts;


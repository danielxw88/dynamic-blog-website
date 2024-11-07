
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


function loadPost() {
    const postId = getQueryParam("id");
    const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const post = posts[postId];

    if (!post) {
        document.getElementById("post-details").innerHTML = "<p>Post not found.</p>";
        return;
    }

  
    document.getElementById("post-date").textContent = post.date;
    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-content").textContent = post.content;
    if (post.image) {
        const postImage = document.getElementById("post-image");
        postImage.src = post.image;
        postImage.style.display = "block"; 
    }


    document.getElementById("edit-title").value = post.title;
    document.getElementById("edit-content").value = post.content;
}


function toggleEditMode() {
    const editForm = document.getElementById("edit-form");
    const postDetails = document.getElementById("post-details");
    const isEditing = editForm.style.display == "block";

    editForm.style.display = isEditing ? "none" : "block";
    postDetails.style.display = isEditing ? "block" : "none";
}


function saveEdit() {
    const postId = getQueryParam("id");
    const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    posts[postId].title = document.getElementById("edit-title").value.trim();
    posts[postId].content = document.getElementById("edit-content").value.trim();

    localStorage.setItem("blogPosts", JSON.stringify(posts));

    loadPost();
    toggleEditMode();
}

document.getElementById("edit-button").addEventListener("click", toggleEditMode);
document.getElementById("save-edit").addEventListener("click", saveEdit);


window.onload = loadPost;

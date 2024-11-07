document.getElementById("newPostForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const date = document.getElementById("date").value;
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const image = document.getElementById("image").value;


    if (!title || !content) {
        alert("Title and Content are required!");
        return;
    }


    const newPost = {
        date: date || new Date().toLocaleDateString("en-CA"), 
        title: title,
        content: content,
        image: image || null 
    };


    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    blogPosts.push(newPost);

    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));


    alert("Blog post saved successfully!");
    document.getElementById("newPostForm").reset();
    window.location.href = "index.html";
});

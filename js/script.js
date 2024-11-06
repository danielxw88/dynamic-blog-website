let blogPosts =[
    {date:"2024-06-01", title:"Good weather", content:"Today's weather is sunny and nice!"},
    {date:"2024-08-05", title:"Hiking", content:"We went north for a day hiking for 20kms"},
    {date:"2024-11-01", title:"Helloween", content:"We went to Wonderland for haunt house"}
    
]

if (!localStorage.getItem("blogPosts")) {
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
}

function loadBlogPosts() {
    const postsContainer = document.getElementById("blog-posts-container");
    const posts = JSON.parse(localStorage.getItem("blogPosts"));

    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const postText = `${post.date} - ${post.title}: ${post.content}`;
        postsContainer.innerHTML += `<p>${postText}</p>`;
    });
}


window.onload = loadBlogPosts;


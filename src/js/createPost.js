let mainContainer = document.querySelector(".postContainer");
let parent = document.querySelector(".parent");

export function addSinglePost(article, date){
    let post = document.createElement("div");
    post.classList.add("post");
    let titleRow = document.createElement("div");
    titleRow.classList.add("title-row");

    post.insertAdjacentHTML("beforeend", `<p class="score">Likes: ${article.data.score}</p>`);

    titleRow.insertAdjacentHTML('afterbegin', `<a class="link" href="${article.data.url} targer="_blank" rel="noopener noreferrer">Go to full article &rarr;</a>`);
    titleRow.insertAdjacentHTML("afterbegin", `<h3 class="title">${article.data.title}</h3>`);
    
    post.append(titleRow);
    
    
    post.insertAdjacentHTML("beforeend", `<p class="user">By: ${article.data.by}</p>`);
    post.insertAdjacentHTML("beforeend", `<p class="date">${date}</p>`);
    

    
    mainContainer.append(post);
    
    
    
};

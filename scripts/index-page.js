const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art.This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    name: "Miles Acosta",
    date: "12/20/2021",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function renderComment() {
  const bandSiteComments = document.querySelector(".comment");

  bandSiteComments.innerHTML = "";

  for (i = 0; i < comments.length; i++) {
    const commentEl = document.createElement("article");
    const commentAvartar = document.createElement("div");
    const commentAvartarImg = document.createElement("img");
    const commentContainer = document.createElement("div");
    const commentInfo = document.createElement("div");
    const userName = document.createElement("p");
    const datePosted = document.createElement("span");
    const userComment = document.createElement("div");
    const userCommentPost = document.createElement("p");

    commentEl.classList.add("comment__section");
    commentAvartar.classList.add("comment__avartar");
    commentAvartarImg.classList.add("comment__avartar-img");
    commentContainer.classList.add("comment__container");
    commentInfo.classList.add("comment__info");
    userName.classList.add("comment__info-name");
    datePosted.classList.add("comment__info-date");
    userComment.classList.add("comment__usertext");
    userCommentPost.classList.add("comment__usertext-post");

    userName.innerText = comments[i].name;
    datePosted.innerText = comments[i].date;
    userCommentPost.innerText = comments[i].comment;

 
    commentEl.appendChild(commentAvartar);
    commentAvartar.appendChild(commentAvartarImg);
    commentEl.appendChild(commentContainer);
    commentContainer.appendChild(commentInfo);
    commentInfo.appendChild( userName);
    commentInfo.appendChild( datePosted);
    commentContainer.appendChild( userComment);
    userComment.appendChild(userCommentPost);
    


    bandSiteComments.appendChild(commentEl);
  }
}

renderComment();


const formEl= document.querySelector(".Conversation__form");




const handleSubmit = (event) => {
    event.preventDefault();

   

   
     

  const newComments = {
        name: event.target.name.value,
        comment: event.target.comment.value,
        date:new Date().toLocaleDateString("en-Us"),
    
        
    };

    comments.unshift(newComments);
    renderComment();
    formEl.reset() 
    
}
formEl.addEventListener("submit", handleSubmit);







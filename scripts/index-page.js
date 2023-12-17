const bandSiteComments = document.querySelector(".comment");
function createComment(comments) {
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

  const timestamp = comments.timestamp;
  const date = new Date(timestamp);
  const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const formattedDay = date.getDate().toString().padStart(2, "0");
  const formattedYear = date.getFullYear();
  const formattedDate = `${formattedMonth}/${formattedDay}/${formattedYear}`;

  userName.innerText = comments.name;
  datePosted.innerText = formattedDate;
  userCommentPost.innerText = comments.comment;

  commentEl.appendChild(commentAvartar);
  commentAvartar.appendChild(commentAvartarImg);
  commentEl.appendChild(commentContainer);
  commentContainer.appendChild(commentInfo);
  commentInfo.appendChild(userName);
  commentInfo.appendChild(datePosted);
  commentContainer.appendChild(userComment);
  userComment.appendChild(userCommentPost);

  bandSiteComments.appendChild(commentEl);
}
let api = new BandSiteApi(myApiKey);

async function renderComment() {
  bandSiteComments.innerHTML = "";
  const comments = await api.getComments();
  comments.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  comments.forEach((comment) => createComment(comment));
}
renderComment();

const formEl = document.querySelector(".Conversation__form");
const handleSubmit = async (event) => {
  event.preventDefault();
  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };
  await api.postComment(newComment);
  renderComment();
  formEl.reset();
};
formEl.addEventListener("submit", handleSubmit);

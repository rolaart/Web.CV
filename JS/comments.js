var comment_btn = document.getElementById('#comment__btn');
var name_area = document.querySelector('.name__textarea');
var comment_area = document.querySelector('.comment__textarea');
var clear = document.getElementById('clear')

var insertComment = (event) => {
  event.preventDefault();
  let name = name_area.value;
  let comment = comment_area.value;
  name_elem = document.createElement('h2');
  comment_elem = document.createElement('h3');
  name_elem.classList.add('.name');
  comment_elem.classList.add('.comment');
  name_elem.innerText = name;
  comment_elem.innerText = comment;
  let comments_elem = document.querySelector('.comments');
  comments_elem.appendChild(name_elem);
  comments_elem.appendChild(comment_elem);
  //console.log("some text here");
};

clear.onclick = () => {
    event.preventDefault();
    name_area.value = '';
    comment_area.value = '';
}

comment_btn.addEventListener('click', insertComment)
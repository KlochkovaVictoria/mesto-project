//popup
let popup = document.querySelector('.popup');
let closeIcon = popup.querySelector('.popup__close-icon');
//profile
let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
//cards


let cardsItem = document.querySelectorAll('.cards__item');
let likeIcons = document.querySelectorAll('.cards__like-icon');

/*открытие окна редактирования popup по кнопке edit*/
editButton.addEventListener('click', function() {
  popup.classList.toggle('popup_opened');
});

/*закрытие окна редактирования popup по иконке close*/
closeIcon.addEventListener('click', function() {
  popup.classList.toggle('popup_opened');
});

/*нажатие на кнопку like*/
likeIcons.forEach(function(likeIcon) {
  likeIcon.addEventListener('click', function(ex) {
    likeIcon.classList.toggle('cards__like-icon_active');
  });
});

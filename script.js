//popup
let popup = document.querySelector('.popup');
let closeIcon = popup.querySelector('.popup__close-icon');
//profile
let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
//cards
let mainContent = document.querySelector('.main-content');
let cards = mainContent.querySelector('.cards');
let cardsItem = cards.querySelectorAll('.cards__item');
let cardsCaption = cardsItem.querySelectorAll('.cards__caption');
let likeIcon = cardsCaption.querySelectorAll('.cards__like-icon');

/*открытие окна редактирования popup по кнопке edit*/
editButton.addEventListener('click', function() {
  popup.classList.toggle('popup_opened');
});

/*закрытие окна редактирования popup по иконке close*/
closeIcon.addEventListener('click', function() {
  popup.classList.toggle('popup_opened');
});

/*нажатие на кнопку like*/
likeIcon.addEventListener('click', function() {
  likeIcon.classList.toggle('cards__like-icon_active');
});

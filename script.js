//popup
let popup = document.querySelector('.popup');
let closeIcon = popup.querySelector('.popup__close-icon');
//profile
let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
//cards


/*открытие окна редактирования popup по кнопке edit*/
editButton.addEventListener('click', function() {
  popup.classList.toggle('popup_opened');
});

/*закрытие окна редактирования popup по иконке close*/
closeIcon.addEventListener('click', function() {
  popup.classList.toggle('popup_opened');
});

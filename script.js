let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');

function editInfo() {
  popup.innerHTML += `
  <section class="popup">
        <div class="popup__container">
            <h2 class="popup__title">Редактировать профиль</h2>
            <form class="popup__forms" name="profile-form">
                <input class="popup__form" type="text" name="firstname" placeholder="Жак-Ив Кусто">
                <input class="popup__form" type="text" name="about" placeholder="Исследователь океана">
                <button class="popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
            </form>
            <button type="button" class="popup__close-icon" aria-label="Закрыть"></button>
        </div>
    </section>
  `;
  editInfo();
}

editButton.addEventListener('click', editInfo);




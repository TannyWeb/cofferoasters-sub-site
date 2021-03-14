export const closeModal = () => {
    document.querySelector('.modal .exit').addEventListener('click', () => {
        document.querySelector('.overlay').classList.remove('show');
        document.querySelector('.overlay').classList.add('hide')
    })
}
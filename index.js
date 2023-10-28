const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');

const loginBtn = document.querySelector('#login-user');
const loginForm = document.querySelector('.login-form-container');
const cancelBtn = document.querySelector('#form-close')

searchBtn.addEventListener('click', () => {
    console.log("btn clicked")
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active');
})

cancelBtn.addEventListener('click', () => {
    loginForm.classList.remove('active')
})

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active')
})

window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active');
}
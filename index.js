const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');

const menuBar = document.querySelector('#menu-bar')

const loginBtn = document.querySelector('#login-user');
const loginForm = document.querySelector('.login-form-container');
const cancelBtn = document.querySelector('#form-close');

const navbar = document.querySelector('.navbar')

searchBtn.addEventListener('click', () => {
    console.log("btn clicked")
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active');
})

menuBar.addEventListener('click', () => {
    navbar.classList.toggle('active-drop-down');
    menuBar.classList.toggle('fa-times')
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
    searchBar.classList.remove('active-drop-down');
    menuBar.classList.remove('fa-times')
}
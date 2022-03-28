'use script'

const downloadDiv = document.querySelector('#download');
const spanElemento = document.querySelector('.fa-arrow-down');
const spanElement2 = document.querySelector('.fa2');
const dropdownContent = document.querySelector('.dropdown-content');
const dropBtn = document.querySelector('#dropbtn');
const bodyHTML = document.querySelector('#container');
const globe = document.querySelector('#globe');

// MouseHover MouseOut
function mouseHover() {
    spanElemento.style.background = '#ffa134';
    spanElement2.style.color = '#ffffff';
}

function mouseOut() {
    spanElemento.style.background = '#c07e32';
    spanElement2.style.color = '#87888c';
}

function buttonHover() {
    globe.style.color = '#ffffff';
    dropBtn.style.color = '#ffffff';
}

function buttonOut() {
    globe.style.color = '#87888c';
    dropBtn.style.color = '#87888c';
}

// Dropdown Content
/*
//Show Content
function showContent() {
    dropdownContent.classList.remove('hidden');
}

//Close Content
function closeContent() {
    dropdownContent.classList.add('hidden');
}


dropBtn.addEventListener('click', showContent);
*/

downloadDiv.addEventListener('mouseover', mouseHover);
downloadDiv.addEventListener('mouseout', mouseOut);
dropdown.addEventListener('mouseover', buttonHover);
dropdown.addEventListener('mouseout', buttonOut)


const toggleDropdown = function() {
    if(dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}

// Hyperlinks on Buttons

const applestoreButton = document.querySelector('.button1');
const googleplayButton = document.querySelector('.button2');
const youtubeButton = document.querySelector('.button3');

const youtubeLink = function() {
    window.open('https://www.youtube.com/channel/UCpjKliylK3cHyQxRJdXbZpA');
}

const appleButton = function() {
    window.open('https://apps.apple.com/app/id1460568073?mt_click_id=mt-q268l2-1648310213-2631208084');
}
const playButton = function() {
    window.open('https://play.google.com/store/apps/details?id=com.my.warface.online.fps.pvp.action.shooter&referrer=mt_click_id%3Dmt-c7ove8-1648309554-4170755098');
}
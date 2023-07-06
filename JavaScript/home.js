// This is for the menu
const hamburger = document.querySelector('.hamburgerMenu');
const menu = document.querySelector('#menuOptions');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const menuOptionsLinks = document.querySelectorAll('.menuOptionsLinks');
menuOptionsLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    })
});

// This is for the Dynamic Event Guests 

const data = [
    {
        image: './images/ARTISTS-AND-GUESTS-MEXICAN/peso-pluma.png',
        name: 'Peso Pluma',
        description: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        credentials: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
    },
    {
        image:'./images/ARTISTS-AND-GUESTS-MEXICAN/badBunny.png',
        name:'Bad Bunny',
        description:'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        credentials:'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
    {
        image:'./images/ARTISTS-AND-GUESTS-MEXICAN/francoEscamilla.png',
        name:'Franco Escamilla',
        description:'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        credentials:'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
    {
        image:'./images/ARTISTS-AND-GUESTS-MEXICAN/galileaMontijo.png',
        name:'Galilea Montijo',
        description:'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        credentials:'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
    {
        image:'./images/ARTISTS-AND-GUESTS-MEXICAN/luisitoComunica.png',
        name:'Luisito Comunica',
        description:'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        credentials:'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
    {
        image:'./images/ARTISTS-AND-GUESTS-MEXICAN//elBabo.png',
        name:'El Babo',
        description:'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        credentials:'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
];

data.forEach((guest, index) => {
    const eventGuests = `<div class="eachGuestContainer">
                            <div class="guestImagesContainer">
                                <img class="chessSquare" src="./images/ARTISTS-AND-GUESTS-MEXICAN/chessSquare.png" alt="">                        
                                <img class="guestImage" src="${guest.image}" alt="">
                            </div>                    
                            <div class="guestTextContainer">
                                <h3 class="guestName">${guest.name}</h3>
                                <p class="guestDescription">${guest.description}</p>
                                <span class="underline underGuest"></span>
                                <p class="guestCredentials">${guest.credentials}</p>
                            </div>
                        </div>`;
    const guestsContainer= document.querySelector('.allGuestsContainer');
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = eventGuests;
    theGuests = tempContainer.firstChild

    if (index >= 2) {
        theGuests.classList.add('guestToHide', 'hidden');
    }

    guestsContainer.appendChild(theGuests);
});

const moreButton = document.querySelector('#moreButton');
const hiddenGuests = document.querySelectorAll('.guestToHide')

moreButton.addEventListener('click', () => {
    hiddenGuests.forEach((hiddenGuest) => {
        hiddenGuest.classList.toggle('hidden');
    });
    moreButton.classList.add('hidden')
    lessButton.classList.add('hidden');
});

const lessButton = document.querySelector('#lessButton');

lessButton.addEventListener('click', () => {
    hiddenGuests.forEach((hiddenGuest) => {
        hiddenGuest.classList.toggle('hidden');
    });
    moreButton.classList.remove('hidden')
    lessButton.classList.remove('hidden');
});
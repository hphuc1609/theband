const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const btnClose = document.querySelector('.js-btn-close');
const modalContainer = document.querySelector('.js-modal-container');

// Hàm hiển thị modal buy ticket (thêm class open vào modal)
function Showbuyticket() {
    modal.classList.add('open');
}

// Hàm ẩn modal buy ticket (gỡ bỏ class open của modal)
function Hidebuyticket() {
    modal.classList.remove('open');
}

// Lặp từng thẻ button, nghe hành vi click  
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', Showbuyticket);
}

modalClose.addEventListener('click', Hidebuyticket);
btnClose.addEventListener('click', Hidebuyticket);
modal.addEventListener('click', Hidebuyticket);

// Dừng hàm Hide ko bị ẩn container khi click
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})


// Hàm đóng/mở menu mobile
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng khi chọn menu trên mobile
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i=0; i<menuItems.length; i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        
        // Điều kiện kiểm tra menu đó có phải là menu cha hay ko ?
        if(isParentMenu){
            event.preventDefault(); // Nếu đúng thì dừng k đóng menu
        } else {
            header.style.height = null; // Nếu sai thì đóng menu
        }
    }
}

// Google Forms
const scriptURL = 'https://script.google.com/macros/s/AKfycbyaSYdaMTAK-gBaMETjuYQcIzyxj_JipWGmDBgQemhNPI74bfXiXHaIBrjvKfLawEIfJA/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Message sent.'
        setTimeout(function(){
            msg.innerHTML = ''
        },500)
        form.reset()
    })
    .catch(error => console.error('Error sending message.', error.message))
})

// Side-menu
var sidemenu = document.getElementById("side-menu");
function openmenu(){
    sidemenu.style.top = "0";
    $('body').css('overflow', 'hidden');
}
function closemenu(){
    sidemenu.style.top = "-1500px";
    $('body').css('overflow', 'auto');
}

// Window-scroll based opacity
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var elementHeight = 320;
    var mobileHeight = 40;
    $('.welcome').css({
        opacity: function() {
            opacity = ((elementHeight - scrollTop) / elementHeight);
            if (opacity < 0)
            {
                opacity = 0;
            }
            return opacity;
        }
    });
    $('.mobile-bar').css({
        opacity: function() {
            opacity = ((scrollTop - elementHeight) / mobileHeight);
            if (opacity >= 1) {
                $('.fa-solid').css('pointer-events', 'auto');
            }
            else {
                $('.fa-solid').css('pointer-events', 'none');
            }
            return opacity;
        }
    });
});
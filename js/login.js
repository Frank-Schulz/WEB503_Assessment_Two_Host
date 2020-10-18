let form = document.getElementById('login-form')
let user = document.getElementById('header-btn-user')

function openForm() {
    if (form.style.display == "block") {
        form.style.display = "none";
        user.style.backgroundColor = '';
    } else {
        form.style.display = "block";
        user.style.backgroundColor = 'orange';
    }
}

$(".tab a").on("click", function (e) {
    e.preventDefault();

    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");

    target = $(this).attr("href");

    $(".tab-content > div").not(target).hide();

    $(target).fadeIn(600);
}
);

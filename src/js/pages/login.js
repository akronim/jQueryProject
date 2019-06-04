

let handleLogin = function (options) {
    let loginForm = $(options.loginForm);

    $('#loginForm input').on('focus', function (e) {
        e.preventDefault();
        $(this).addClass('text-danger');
        // $(this).css('box-shadow', '0 0 5px #38367F'); // h-shadow v-shadow blur color
        // $(this).css({
        //     'box-shadow':   '0 0 5px #38367F',
        //     'width':          '350px' 
        // });

        // stop(true, false)
        // 1: true => clear the animation queue
        // 2: true => enforce the end state (završi do kraja)
        $(this).stop(true, false).animate({ width: "250px" }, 1000);
    });

    $('#loginForm input').focusout(function () {

        $(this).stop(true, false).animate({ width: "130px" }, 1000);

        // let elementName = $(this).attr('name'); // dohvaćamo vrijednosti za name attribut
        // console.log(elementName);
        // $(this).attr('name', 'Pero'); // setter za attribut

        $(this).removeAttr('style');
        if ($(this).hasClass('text-danger')) {
            $(this).removeClass('text-danger');
            console.log("IMAAAAA")
        }
        else {
            console.log("NEMAAA")
        }
    })

    loginForm.on('submit', function (e) {
        //loginForm.one('submit', function (e) { // samo prvi puta (ne treba i off())
        e.preventDefault();

        // let formData = $(this).serialize();
        // console.log(formData); // username=aaaa&password=bbbbb

        // let formData = $(this).serializeArray();
        // console.log(formData);

        // let formData = new FormData(loginForm); // ne radi
        // console.log(formData);

        let formData = $(this).getFormData();
        console.log(formData);
        loginForm.off('submit');
    });
};

// git add .
// git commit -a -m "commit" (do not need commit message either)
// git push
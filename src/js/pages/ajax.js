let handleAjax = function (options) {

    $('#GetData').on('click', function (e) {
        let requestData = {
            productId: 159
        };

        let getDataBtn = $(this);

        $.ajax({
            async: true,
            crossDomain: true,
            //url: 'http://api.hnb.hr/tecajn/v2',
            url: 'products.json', 
            //url: 'http://www.w3schools.com/cssref/css3_pr_text-shadow.asp',
            method: 'GET',
            contentType:'application/json', // The content type used when sending data to the server. 
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            data: JSON.stringify(requestData),
            beforeSend:function(){

                $('body.ajax-body').prepend('<div id="loader">LOADING...</div>');
                getDataBtn.prop('disabled', true); // uvedeno s HTML5
            },
            //dataType: 'jsonp',
        })
        .done (function(data, textStatus, jqXHR) {
           console.log(data);
        }).fail (function(jqXHR, textStatus, errorThrown) {
            alert("Error");
        })
        .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) {
            setTimeout(function (data) {
                $('#loader').remove();
                getDataBtn.prop('disabled', false); // uvedeno s HTML5
            }, 1000)
        });
    })
};

// git add .
// git commit -m "commit" (do not need commit message either)
// git push
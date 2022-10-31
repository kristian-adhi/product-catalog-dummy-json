import $ from 'jquery'; 

$(document).ready(function () {
    dropdown_category();
});

function dropdown_category() {

    $.getJSON("https://dummyjson.com/products/categories", 
        function (result) {
            let category;

            $.each(result, function(key, val) { 
                category = val;

                $("#category").append(
                    $("<option></option>").text(category).val(category)
                );
            });
        }
    );
    
}
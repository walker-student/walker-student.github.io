document.getElementById('category').addEventListener('change', function() {
    var category = this.value;
    if (category === 'drink') {
        document.getElementById('drinkFields').style.display = 'block';
        document.getElementById('foodFields').style.display = 'none';
        document.getElementById('foodName').value = '';
    } else if (category === 'food') {
        document.getElementById('drinkFields').style.display = 'none';
        document.getElementById('foodFields').style.display = 'block';
        document.getElementById('drinkName').value = '';
        document.getElementById('size').value = '';
    }
});

// Dynamically add new rows

$("#rowAdder").click(function () {
    newRowAdd =
        '<div id="row"> <div class="input-group m-3">' +
        '<div class="input-group-prepend">' +
        '<button class="btn btn-danger" id="DeleteRow" type="button">' +
        '<i class="bi bi-trash"></i> Delete</button> </div>' +
        '<input type="text" class="form-control m-input"> </div> </div>';

    $('#newinput').append(newRowAdd);
});
$("body").on("click", "#DeleteRow", function () {
    $(this).parents("#row").remove();
});
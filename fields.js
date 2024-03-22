function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

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
        document.getElementById('milk').value = '';
        document.getElementById('flavoring').value = '';
    }
});


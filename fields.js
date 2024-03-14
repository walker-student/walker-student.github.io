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


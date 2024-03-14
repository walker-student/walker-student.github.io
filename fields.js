document.getElementById('category').addEventListener('change', function() {
    var category = this.value;
    if (category === 'drink') {
        document.getElementById('drinkFields').style.display = 'block';
        document.getElementById('foodFields').style.display = 'none';
    } else if (category === 'food') {
        document.getElementById('drinkFields').style.display = 'none';
        document.getElementById('foodFields').style.display = 'block';
    }
});
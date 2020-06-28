function displayImages(data) {
    console.log(data);
    $('.image-collection').append(`<img src=${data.message} alt="">`);
    $('.image-collection').removeClass('hidden');
}

function clearBeforeNew() {
    $('.image-collection').html('');
}

function getInfo(userBreed) {
    fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
        .then(response => response.json())
        .then(
            data => {
                if (data.status === 'error') {
                    throw new Error(`${data.message}`)
                } else {
                    displayImages(data)
                }
            })
        .catch(error => alert(`Something went wrong. This clue might help: ${error}`));
}

function render() {
    let userBreed = $('#user-choice').val();
    getInfo(userBreed);
    clearBeforeNew();
}

function getUserInput() {
    $('form').submit(e => {
        e.preventDefault();
        render();
    });
}

$(function () {
    getUserInput();
});
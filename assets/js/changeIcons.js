var github = document.getElementById('github');
var linkedin = document.getElementById('linkedin');
var instagram = document.getElementById('instagram');

function iconDark (icon) {
    if (icon.src === github.src) {
        github.src = 'assets/img/githubDark.png';
    }
    if (icon.src === linkedin.src) {
        linkedin.src = 'assets/img/linkedinDark.png';
    }
    if (icon.src === instagram.src) {
        instagram.src = 'assets/img/instagramDark.png';
    }
}

function iconLight (icon) {
    if (icon.src === github.src) {
        github.src = 'assets/img/github.png';
    }
    if (icon.src === linkedin.src) {
        linkedin.src = 'assets/img/linkedin.png';
    }
    if (icon.src === instagram.src) {
        instagram.src = 'assets/img/instagram.png';
    }
}

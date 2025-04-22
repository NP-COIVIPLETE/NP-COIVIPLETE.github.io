window.onload = function() {
    var announcementSection = document.getElementById('announcement');
    if (window.location.pathname == '/') {
        announcementSection.style.display = "block";
    }
}

function closeAnnouncement() {
    var announcementSection = document.getElementById('announcement');
    announcementSection.style.display = "none";
}

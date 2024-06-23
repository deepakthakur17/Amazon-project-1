document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const locationButton = document.getElementById('update-location-btn');
    const locationText = document.getElementById('location-text');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        if (query) {
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search query.');
        }
    });

    locationButton.addEventListener('click', () => {
        const newLocation = prompt('Enter your new location:');
        if (newLocation) {
            locationText.textContent = `Delivering to ${newLocation}`;
        }
    });
});

document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    fetch('/submit-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, comment }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        fetchComments(); // Refresh comments after submission
        document.getElementById('commentForm').reset(); // Reset form fields
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function fetchComments() {
    fetch('/comments')
    .then(response => response.json())
    .then(comments => {
        const container = document.getElementById('commentsContainer');
        container.innerHTML = ''; // Clear current comments
        comments.forEach(comment => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${comment.name}</strong>: ${comment.comment} <em>${new Date(comment.time).toLocaleString()}</em>`;
            container.appendChild(div);
        });
    });
}

// Load comments on page load
document.addEventListener('DOMContentLoaded', fetchComments);

import {
    auth,
    db,
    onAuthStateChanged,
    signOut,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy
} from './firebase.mjs';

// Sign-out functionality
document.getElementById('signOut').addEventListener('click', async () => {
    try {
        await signOut(auth);
        window.location.href = '/index.html'; // Redirect to login page
    } catch (error) {
        console.error('Sign Out Error:', error);
    }
});

// Show or hide post box based on authentication status
onAuthStateChanged(auth, user => {
    const postBox = document.getElementById('postBox');
    const userNameInput = document.getElementById('userName');

    if (user) {
        postBox.style.display = 'block';
        userNameInput.value = user.displayName || '';
        userNameInput.disabled = true;
    } else {
        postBox.style.display = 'none';
    }
});

// Handle post creation
document.getElementById('addBtn').addEventListener('click', async () => {
    const description = document.getElementById('descrip').value;
    const userName = auth.currentUser.displayName || 'Anonymous';

    if (description.trim()) {
        try {
            const docRef = await addDoc(collection(db, 'blogPosts'), {
                userName,
                description,
                createdAt: new Date()
            });
            console.log('Document written with ID: ', docRef.id);
            document.getElementById('descrip').value = ''; // Clear description box after posting
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    } else {
        alert('Please enter a description for your post.');
    }
});

// Load and display blog posts
async function loadPosts() {
    const postsContainer = document.getElementById('card');
    postsContainer.innerHTML = '';

    const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        const post = doc.data();
        const postElement = document.createElement('div');
        postElement.className = 'card';
        postElement.innerHTML = `
            <h3>${post.userName}</h3>
            <p>${post.description}</p>
            <p>${new Date(post.createdAt.toDate()).toLocaleString()}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Load posts on page load
loadPosts();

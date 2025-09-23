import * as THREE from 'three'
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const docsModal = document.getElementById('docs-modal');
const docsText = document.getElementById('docs-text');
const closeDocs = document.getElementById('close-docs');



// Open docs modal
function openDocsModal(title) {
    docsText.innerHTML = docsData[title] || "<h2>Documentation</h2><p>No documentation available.</p>";
    docsModal.style.display = 'flex';
}

// Close docs modal
function closeDocsModal() {
    docsModal.style.display = 'none';
    docsText.innerHTML = '';
}


// Add a close button
if (!document.getElementById('close-video')) {
    const closeBtn = document.createElement('span');
    closeBtn.id = 'close-video';
    closeBtn.className = 'close-btn';
    closeBtn.textContent = 'X';
    modal.appendChild(closeBtn);
}

// Utility: Open video modal with enhanced UI
function openVideoModal(videoUrl) {
    modalVideo.src = videoUrl;
    modal.classList.add('show');
    modalVideo.play();
}

// Utility: Close video modal
function closeVideoModal() {
    modal.classList.remove('show');
    modalVideo.pause();
    modalVideo.src = '';
}

// Add event listeners to experiment buttons
document.querySelectorAll('.experiment').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        const card = button.closest('.reaction-card');
        const videoSrc = card.getAttribute('data-video');
        openVideoModal(videoSrc);
    });
});

// Close modal on close button click
document.getElementById('close-video').addEventListener('click', closeVideoModal);

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeVideoModal();
    }
});

// Optional: Close modal when clicking outside the video
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeVideoModal();
    }
});

// --- Experiment Docs 
const docsData = {
    "Phenolphthalein Reaction": `

    <h2 class="docs-title">Phenolphthalein Reaction</h2>
    <p class="docs-main-text">Phenolphthalein is a chemical compound that changes color depending on the pH of a solution. It acts as an indicator, particularly in acid-base titrations. Phenolphthalein is colorless in acidic and neutral solutions, but turns pink in basic (alkaline) solutions, specifically when the pH is above 8.5, and the color intensifies as the pH increases.</p>
    <ul class="docs-list">
        <li>
            <strong>Acidic Solutions:</strong>
            <p>Phenolphthalein remains colorless in acidic solutions because its molecules do not ionize. </p>
        </li>

        <li>
            <strong>Basic Solutions:</strong>
            <p>In basic solutions, phenolphthalein undergoes a chemical transformation, ionizing to form a pink-colored ion. This color change is reversible; when the solution becomes acidic again, the pink color disappears. </p>
        </li>

        <li>
            <strong>Acid-Base Titrations:</strong>
            <p>Phenolphthalein is widely used as an indicator in acid-base titrations to visually determine the endpoint of the reaction. </p>
        </li>

        <li>
            <strong>Other Applications:</strong>
            <p>Besides titrations, phenolphthalein has other uses, including as a laxative and in the Kastle-Meyer test for blood detection. </p>
        </li>

    </ul>

    `,
    "Copper + Ammonia": `
    <h2 class="docs-title" >Copper + Ammonia</h2>
    <p class="docs-main-text">When copper ions react with ammonia, they form a deep blue-colored complex ion called tetraamminecopper(II). This reaction is often used to demonstrate the formation of complex ions in solution. </p>

    <ul class="docs-list">
        <li>
            <strong>Initial Reaction:</strong>
            <p>The formation of the [Cu(NH3)4]2+ complex ion results in a dramatic color change from the pale blue of the copper(II) ion to the deep blue-violet of the complex. </p>
        </li>

        <li>
            <strong>Complex Ion Formation:</strong>
            <p>The reaction can be represented as: Cu2+(aq) + 4NH3(aq) → [Cu(NH3)4]2+(aq). </p>
        </li>

        <li>
            <strong>Equation:</strong>
            <p>In the presence of excess ammonia, the copper(II) hydroxide redissolves as the ammonia molecules replace the water molecules surrounding the copper(II) ion, forming the tetraamminecopper(II) complex ion. </p>
        </li>

        <li>
            <strong>Color Change:</strong>
            <p>The formation of the [Cu(NH3)4]2+ complex ion results in a dramatic color change from the pale blue of the copper(II) ion to the deep blue-violet of the complex. </p>
        </li>

    </ul>
    `,
    "Liquid Nitrogen Reaction": `
    <h2 class="docs-title" >Liquid Nitrogen Experiment</h2>
    <p class="docs-main-text">Liquid nitrogen is primarily used in cryogenic processes and for cooling in various applications, not for specific chemical reactions that have a unique name associated with them. It's frequently used in cryopreservation, cryosurgery, and as a coolant in chemical reactions that require extremely low temperatures. </p>
    <ul class="docs-list">
        <li>
            <strong>Cryopreservation:</strong>
            <p>Liquid nitrogen is used to rapidly freeze biological samples like semen, eggs, and embryos for long-term storage. </p>
        </li>

        <li>
            <strong>Cryosurgery:</strong>
            <p>It's used to freeze and destroy abnormal or unhealthy tissue in medical procedures, such as removing skin lesions. </p>
        </li>

        <li>
            <strong>Cooling in Chemical Reactions:</strong>
            <p>Liquid nitrogen provides a low-temperature environment for certain chemical reactions that need to occur at very low temperatures, like those used in producing some pharmaceuticals. </p>
        </li>

        <li>
            <strong>Cooling Baths:</strong>
            <p>Liquid nitrogen is used to rapidly freeze biological samples like semen, eggs, and embryos for long-term storage.
            </p>
        </li>

    </ul>
    `
};

// Add event listeners to all docs buttons
document.querySelectorAll('.reaction-card .btn.docs').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const card = btn.closest('.reaction-card');
        const title = card.querySelector('h3').textContent.trim();

        openDocsModal(title);
    });
});

closeDocs.addEventListener('click', closeDocsModal);

// Optional: Close docs modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && docsModal.style.display === 'flex') {
        closeDocsModal();
    }
});

// Optional: Close docs modal when clicking outside the content
docsModal.addEventListener('click', (e) => {
    if (e.target === docsModal) {
        closeDocsModal();
    }
});

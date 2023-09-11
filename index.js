const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
const pickButton = document.getElementById('pickButton');

textarea.focus();

// Function to create tags
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// Function to pick a random tag
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// Function to highlight a tag
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// Function to unhighlight a tag
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

// Function to perform random selection
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) {
            highlightTag(randomTag)

            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

// Event listener for the textarea
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

// Event listener for the button
pickButton.addEventListener('click', () => {
    randomSelect()
    // Clear the text from the textarea
    textarea.value = '';
});


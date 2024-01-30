const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(localStorageKey));

if (savedData) {
    form.elements.email.value = savedData.email || '';
    form.elements.message.value = savedData.message || '';
}

form.addEventListener('input', event => {
    const formInfo = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formInfo));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    if (form.elements.email.value === '' || form.elements.message.value === '') {
        return
    }
    
    const formInfo = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    console.log(formInfo);

    localStorage.removeItem(localStorageKey);
    form.reset();
});

export function initCustomSelects(root = document) {
    const selects = root.querySelectorAll('.custom-select');
    if (!selects.length) return;

    selects.forEach(select => {
        const selected = select.querySelector('.selected');
        const optionsContainer = select.querySelector('.options-container');
        const options = optionsContainer?.querySelectorAll('.option');

        if (!selected || !optionsContainer || !options?.length) return;

        selected.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllSelectsExcept(select);
            optionsContainer.classList.toggle('open');
            selected.classList.toggle('active');
            select.classList.toggle('open');
        });

        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();

                const text = option.textContent;
                const value = option.getAttribute('data-value');

                selected.textContent = text;
                select.setAttribute('data-value', value);
                selected.classList.add('has-value');
                optionsContainer.classList.remove('open');
                selected.classList.remove('active');
                select.classList.remove('open');
            });
        });
    });

    document.addEventListener('click', () => closeAllSelectsExcept(null));

    function closeAllSelectsExcept(current) {
        document.querySelectorAll('.custom-select').forEach(select => {
            if (select !== current) {
                select.querySelector('.options-container')?.classList.remove('open');
                select.querySelector('.selected')?.classList.remove('active');
                select.classList.remove('open');
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCustomSelects());
} else {
    initCustomSelects();
}
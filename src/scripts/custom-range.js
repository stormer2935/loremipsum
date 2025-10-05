export function initCustomRanges(root = document) {
    const sliders = root.querySelectorAll('.custom-range__wrapper');

    if (!sliders.length) return;

    sliders.forEach(wrapper => {
        const rangeInput = wrapper.querySelector('.custom-range__input');
        const rangeValue = wrapper.querySelector('.custom-range__value');

        if (!rangeInput || !rangeValue) return;

        function updateValue() {
            const min = Number(rangeInput.min) || 0;
            const max = Number(rangeInput.max) || 100;
            const val = Number(rangeInput.value) || 0;
            const percent = max === min ? 0 : ((val - min) / (max - min)) * 100;

            rangeValue.textContent = val + '%';
        }

        rangeInput.addEventListener('input', updateValue);
        updateValue();
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCustomRanges());
} else {
    initCustomRanges();
}
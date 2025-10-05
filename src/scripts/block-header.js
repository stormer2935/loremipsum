export function initBlockHeader(root = document) {
    const btn = root.querySelector('.block-header__mobile-btn');
    const panel = root.querySelector('.block-header__area-menu');

    if (!btn || !panel) return;

    const state = {
        isOpen: false,

        open() {
            panel.classList.add('open');
            btn.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
            this.isOpen = true;
        },

        close() {
            panel.classList.remove('open');
            btn.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            this.isOpen = false;
        },

        toggle() {
            this.isOpen ? this.close() : this.open();
        },
    };

    btn.addEventListener('click', () => state.toggle());
}

document.addEventListener('DOMContentLoaded', () => {
    initBlockHeader(document);
});
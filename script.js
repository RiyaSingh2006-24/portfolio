'use strict';

const contactEndpoint = '/api/contact';

class MobileNavigation {
    constructor() {
        this.toggle = document.getElementById('nav-toggle');
        this.menu = document.getElementById('nav-menu');
        this.links = document.querySelectorAll('.nav-link');
        this.bind();
    }

    bind() {
        if (!this.toggle || !this.menu) return;

        this.toggle.addEventListener('click', () => {
            const open = this.menu.classList.toggle('open');
            this.toggle.setAttribute('aria-expanded', String(open));
        });

        this.links.forEach((link) => {
            link.addEventListener('click', () => {
                this.menu.classList.remove('open');
                this.toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

class TypingEffect {
    constructor() {
        this.target = document.getElementById('typing-role');
        this.roles = [
            'MERN stack applications',
            'recruiter-ready projects',
            'secure backend APIs',
            'clean responsive interfaces',
            'database-driven web apps'
        ];
        this.roleIndex = 0;
        this.charIndex = 0;
        this.deleting = false;
        this.init();
    }

    init() {
        if (!this.target) return;
        this.tick();
    }

    tick() {
        const current = this.roles[this.roleIndex];
        this.target.textContent = current.slice(0, this.charIndex);

        if (!this.deleting && this.charIndex < current.length) {
            this.charIndex += 1;
        } else if (this.deleting && this.charIndex > 0) {
            this.charIndex -= 1;
        } else if (!this.deleting) {
            this.deleting = true;
            setTimeout(() => this.tick(), 1200);
            return;
        } else {
            this.deleting = false;
            this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        }

        setTimeout(() => this.tick(), this.deleting ? 38 : 72);
    }
}

class ScrollEffects {
    constructor() {
        this.reveals = document.querySelectorAll('.reveal');
        this.sections = document.querySelectorAll('main section[id], header[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.initReveal();
        this.initActiveNavigation();
    }

    initReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                this.animateProgress(entry.target);
                this.animateMetrics(entry.target);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.14 });

        this.reveals.forEach((element) => observer.observe(element));
    }

    animateProgress(element) {
        const cards = element.matches('.skill-card') ? [element] : element.querySelectorAll?.('.skill-card') || [];
        cards.forEach((card) => {
            const bar = card.querySelector('.progress span');
            if (bar) bar.style.width = `${card.dataset.level || 70}%`;
        });
    }

    animateMetrics(element) {
        const metrics = element.matches('.metric-card') ? [element] : element.querySelectorAll?.('.metric-card') || [];
        metrics.forEach((metric) => {
            const number = metric.querySelector('[data-count]');
            if (!number || number.dataset.done) return;
            number.dataset.done = 'true';
            const target = Number(number.dataset.count);
            const suffix = number.dataset.suffix ?? '+';
            let current = 0;
            const step = Math.max(1, Math.ceil(target / 34));
            const interval = setInterval(() => {
                current = Math.min(target, current + step);
                number.textContent = `${current}${suffix}`;
                if (current >= target) clearInterval(interval);
            }, 28);
        });
    }

    initActiveNavigation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) this.setActive(entry.target.id);
            });
        }, { rootMargin: '-35% 0px -55% 0px' });

        this.sections.forEach((section) => observer.observe(section));
    }

    setActive(id) {
        this.navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    }
}

class CertificateModal {
    constructor() {
        this.modal = document.getElementById('preview-modal');
        this.title = document.getElementById('modal-title');
        this.closeButton = document.getElementById('modal-close');
        this.triggers = document.querySelectorAll('[data-preview]');
        this.bind();
    }

    bind() {
        if (!this.modal) return;

        this.triggers.forEach((trigger) => {
            trigger.addEventListener('click', () => this.open(trigger.dataset.preview));
        });

        this.closeButton?.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (event) => {
            if (event.target === this.modal) this.close();
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') this.close();
        });
    }

    open(text) {
        this.title.textContent = text || 'Certificate';
        this.modal.classList.add('open');
        this.modal.setAttribute('aria-hidden', 'false');
    }

    close() {
        this.modal.classList.remove('open');
        this.modal.setAttribute('aria-hidden', 'true');
    }
}

class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(this.form).entries());
        const button = this.form.querySelector('button[type="submit"]');
        const initial = button.innerHTML;

        if (!this.isValid(data)) {
            this.toast('Please fill every field with a valid email address.', 'error');
            return;
        }

        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending';

        try {
            const response = await fetch(contactEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json().catch(() => ({}));
            if (!response.ok) throw new Error(result.error || 'Message could not be sent right now.');
            this.form.reset();
            this.toast(result.message || 'Message sent successfully.', 'success');
        } catch (error) {
            this.toast(`${error.message} You can also email Riya directly.`, 'error');
        } finally {
            button.disabled = false;
            button.innerHTML = initial;
        }
    }

    isValid(data) {
        return Boolean(
            data.name?.trim() &&
            data.email?.trim() &&
            data.subject?.trim() &&
            data.message?.trim() &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
        );
    }

    toast(message, type) {
        document.querySelectorAll('.toast').forEach((toast) => toast.remove());
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.setAttribute('role', type === 'success' ? 'status' : 'alert');
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 5200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MobileNavigation();
    new TypingEffect();
    new ScrollEffects();
    new CertificateModal();
    new ContactForm();
});

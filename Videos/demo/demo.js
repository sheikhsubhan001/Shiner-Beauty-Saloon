 document.addEventListener('DOMContentLoaded', () => {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');

            const showTab = (tabId) => {
                tabButtons.forEach(button => button.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                const activeButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
                if (activeButton) {
                    activeButton.classList.add('active');
                }
                const activeContent = document.getElementById(tabId);
                if (activeContent) {
                    activeContent.classList.add('active');
                }
            };

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.dataset.tab;
                    showTab(tabId);
                });
            });

            if (tabButtons.length > 0) {
                showTab(tabButtons[0].dataset.tab);
            }
        });
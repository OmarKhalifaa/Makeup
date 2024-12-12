document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".FAQ-accordian-item");

    faqItems.forEach((item) => {
        const title = item.querySelector(".FAQ-title");
        const content = item.querySelector(".FAQ-content");

        title.addEventListener("click", () => {
            if (item.classList.contains("expanded")) {
                content.style.maxHeight = null;
                item.classList.remove("expanded");
            } else {
                faqItems.forEach((otherItem) => {
                    const otherContent = otherItem.querySelector(".FAQ-content");
                    otherContent.style.maxHeight = null;
                    otherItem.classList.remove("expanded");
                });
                item.classList.add("expanded");
                content.style.maxHeight = content.scrollHeight + "px"; // Dynamic height
            }
        });
    });
});




function showTabContent(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab-button-base, .tab-button-base-2').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add active class to the clicked tab
    event.currentTarget.classList.add('active');
}

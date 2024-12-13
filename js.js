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

function showTabContent(tabId, element) {
    // Remove 'active' class from all tabs
    const tabs = document.querySelectorAll(".tab-button-base, .tab-button-base-2");
    tabs.forEach((tab) => tab.classList.remove("active"));
  
    // Add 'active' class to the clicked tab
    element.classList.add("active");
  
    // Scroll the clicked tab into view (within the tabs container)
    const tabsContainer = document.querySelector(".horizontal-tabs");
    const tabRect = element.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();
  
    // Check if the tab is outside the visible container
    if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) {
      element.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest", // Ensure it stays within the horizontal container
      });
    }
  
    // Display the corresponding tab content
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach((content) => content.classList.remove("active"));
  
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.add("active");
    }
  }
  function toggleMenu() {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
}

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const activeHeader = document.querySelector('.accordion-header.active');
    
    if (activeHeader && activeHeader !== header) {
      activeHeader.classList.remove('active');
      const activeContent = activeHeader.nextElementSibling;
      activeContent.style.maxHeight = null;
      activeContent.style.opacity = 0;
    }
    
    header.classList.toggle('active');
    const content = header.nextElementSibling;

    if (header.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
      // Small delay to trigger opacity transition after maxHeight set
      setTimeout(() => {
        content.style.opacity = 1;
      }, 50);
    } else {
      content.style.opacity = 0;
      // Wait for fade out, then collapse height
      setTimeout(() => {
        content.style.maxHeight = null;
      }, 500);
    }
  });
});

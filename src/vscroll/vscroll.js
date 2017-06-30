var vscroll = {
    inserted: function(el) {
        let scrollBar = document.createElement("div");
        scrollBar.classList.add("scroll-beauty-bar");
        el.classList.add("scroll-beauty-content");
        el.appendChild(scrollBar);
        el.handleScroll = function(e) {
            let maxScrollTop = e.target.scrollHeight - e.target.offsetHeight;
            if (maxScrollTop == 0) {
                return;
            }

            let maxTop = e.target.offsetHeight - 80;
            let scrollPercent = e.target.scrollTop / maxScrollTop;
            scrollBar.style.top = maxTop * scrollPercent + e.target.scrollTop + "px";
        };
        el.addEventListener("scroll", el.handleScroll);
    },
    update: function() {
        console.log("updated!");
    },
    componentUpdated: function(el) {
        el.handleScroll({ target: el });
    },
    unbind: function(el) {
        el.removeEventListener("scroll", el.handleScroll);
    }
}

export default vscroll
// These are all here to add some syntactic sugar to the div soup

class AppBody extends HTMLElement {}
customElements.define("app-body", AppBody, { extends: "div" });

class HomePage extends HTMLElement {}
customElements.define("home-page", HomePage, { extends: "div" });

class NavDrawer extends HTMLElement {}
customElements.define("nav-drawer", NavDrawer, { extends: "div" });

class ModalWrapper extends HTMLElement {}
customElements.define("modal-wrapper", ModalWrapper, { extends: "div" });

class ModalBox extends HTMLElement {}
customElements.define("modal-box", ModalBox, { extends: "div" });

class ContentBody extends HTMLElement {}
customElements.define("content-body", ContentBody, { extends: "div" });

class ContentCard extends HTMLElement {}
customElements.define("content-card", ContentCard, { extends: "div" });

class CardList extends HTMLElement {}
customElements.define("card-list", CardList, { extends: "ul" });

class CardTitle extends HTMLElement {}
customElements.define("card-title", CardTitle, { extends: "h3" });

class CardContent extends HTMLElement {}
customElements.define("card-content", CardContent, { extends: "div" });

class ProjectCard extends HTMLElement {}
customElements.define("project-card", ProjectCard, { extends: "div" });

class ProjectBox extends HTMLElement {}
customElements.define("project-box", ProjectBox, { extends: "div" });

customElements.define('esielkar-header',
    class extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = `
                <header class="header">
                    <nav class="navbar navbar-expand-md navbar-scroll navbar-light bg-light fixed-top" id="navbar">
                        <div class="container">
                            <div class="d-flex">
                                <a class="navbar-brand" href="#top">Esiel Kar</a>
            
                                <select class="form-select form-select-sm my-auto border-0 bg-light" id="language-select"
                                    aria-label=".form-select example" style="width: auto;"
                                    onchange="changePageLanguage(this.value)">
                                    <option value="EN" selected>English</option>
                                    <option value="ES">Español</option>
                                </select>
                            </div>
            
            
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
            
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item m-2"><a class="nav-link" href="#scrollspyHome">Inicio</a></li>
                                    <li class="nav-item m-2"><a class="nav-link" href="#scrollspyAbout">Sobre mi</a></li>
                                    <li class="nav-item m-2"><a class="nav-link" href="#scrollspyWorks">Trabajos</a></li>
                                    <li class="nav-item m-2"><a href="#scrollspyContact" class="btn btn-primary">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            `;
        }
    }
);
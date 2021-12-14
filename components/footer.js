customElements.define('esielkar-footer',
    class extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = `
                <footer class="footer mt-auto py-4 bg-dark">
                    <div class="container text-center">
                        <p class="h5 text-light">You can also find me on</p>
                        <section class="m-2">
                            <a class="btn btn-link btn-floating btn-lg text-light fs-3 mx-3"
                                href="https://www.facebook.com/esielkar" target="_blank" role="button"
                                data-mdb-ripple-color="dark"><em class="bi-facebook"></em></a>
                            <a class="btn btn-link btn-floating btn-lg text-light fs-3 mx-3"
                                href="https://www.instagram.com/esielkar" target="_blank" role="button"
                                data-mdb-ripple-color="dark"><em class="bi-instagram"></em></a>
                            <a class="btn btn-link btn-floating btn-lg text-light fs-3 mx-3" href="https://www.github.com/esielkar"
                                target="_blank" role="button" data-mdb-ripple-color="dark"><em class="bi-github"></em></a>
                            <a class="btn btn-link btn-floating btn-lg text-light fs-3 mx-3"
                                href="https://www.linkedin.com/in/esiel-arizmendi-ramírez-a215701b9" target="_blank" role="button"
                                data-mdb-ripple-color="dark"><em class="bi-linkedin"></em></a>
                        </section>
                        <span class="text-muted">Copyright &copy; All rights reserved 2021.</span>
                        <br class="d-md-none"/>
                        <a href="mailto:esiel.kar@gmail.com">Esiel Kevin Arizmendi Ramirez </a>
                    </div>
                </footer>
            `;
        }
    }
);
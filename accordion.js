/*
    :: 사용법 ::
    <script type="module" src="node_modules/sgj-accordion/accordion.js"></script> 를 추가하고,
    <accordion title="요약내용" icon="구글아이콘명">상세내용 (쉼표로 구분된 문자열)</accordion> 태그를 작성.
*/
customElements.define("sgj-accordion", class extends HTMLElement {
    connectedCallback() {
        const list = this.innerText.replace(/ /g, "").split(",").map((e, i) => `<li>${e}</li>`)
        this.attachShadow({mode: "open"}).innerHTML = `

            <details name="${this.getAttribute("name")}">
                <summary>
                    <span class="material-symbols-outlined icon_alpha">${this.getAttribute("icon")}</span>${this.getAttribute("title")}
                </summary>
                <ul>
                    ${list.join("")}
                </ul>
            </details>

            <style>
                @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);

                details {
                    padding: 5px;
                    cursor: pointer;

                    &[open] ul li {animation: accordion .3s;}

                    summary {
                        list-style: none;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 0.9em;

                        .icon_alpha {
                            color: transparent;
                            background: linear-gradient(-45deg, #aaa 25%, var(--main-color) 50%, #aaa 75%);
                            background-clip: text;
                        }
                    }

                    ul {
                        background: #efefef5f;
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                        list-style: none;
                        padding: 5px 0;
                        margin: 5px 0 0 0;

                        li {
                            font-size: 0.9em;
                            padding: 3px 35px;
                        }
                    }
                }
                @keyframes accordion {
                    from {
                        opacity: 0;
                        transform: translateX(-10%);
                    }
                }
            </style>
        `
    }
})

document.querySelectorAll("accordion").forEach(e => e.outerHTML = e.outerHTML.replace("accordion", "sgj-accordion"))
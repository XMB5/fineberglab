function go(){for(let t of document.querySelectorAll("[scrambled]")){const e=(r=t.getAttribute("scrambled"),String.fromCharCode(...Array.from(r).map((r=>r.charCodeAt(0))).map((r=>r+3))));t.append(e);const o=t.getAttribute("scrambledurlprefix");o&&t.setAttribute("href",o+":"+e)}var r}go();
//# sourceMappingURL=contact.670d9c59.js.map

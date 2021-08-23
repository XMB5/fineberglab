// address munging, see https://en.wikipedia.org/wiki/Address_munging
// scrambler in `scramble.js`

function go() {
    function unscramble(str) {
        return String.fromCharCode(...Array.from(str).map(c => c.charCodeAt(0)).map(charCode => charCode + 3));
    }

    for (let element of document.querySelectorAll('[scrambled]')) {
        const content = unscramble(element.getAttribute('scrambled'));
        element.append(content);

        const prefix = element.getAttribute('scrambledurlprefix');
        if (prefix) {
            element.setAttribute('href', prefix + ':' + content);
        }
    }
}
go();
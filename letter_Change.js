function LetterChanges(text) {
    let s = text.split('');
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case ' ':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z':
                s[i] = 'A';
                break;
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        return s.join('');
    }
}
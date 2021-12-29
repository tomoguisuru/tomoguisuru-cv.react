export default class MaterialIcons {
    static init() {
        const head: any = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.href = 'https://cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css';
        link.rel = "stylesheet";

        head.appendChild(link);
    }
}
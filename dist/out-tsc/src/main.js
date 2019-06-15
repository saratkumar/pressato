import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
document.addEventListener('DOMContentLoaded', function () {
    platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(function (err) { return console.error(err); });
});
//# sourceMappingURL=main.js.map
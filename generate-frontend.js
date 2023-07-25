const fs = require('fs');

const baseLang = 'ru.json';

const dir = 'frontend';

const contents = fs.readFileSync(`${dir}/${baseLang}`, 'utf-8');

const data = JSON.parse(contents);

const langs = fs.readdirSync(dir);

langs.forEach(lang => {
  if (lang !== baseLang) {
    const contentsLang = fs.readFileSync(`${dir}/${lang}`, 'utf-8');

    const dataLang = JSON.parse(contentsLang);

    Object.keys(data).forEach(key => {
      if (dataLang[key] == null) {
        dataLang[key] = key;
      }
    });

    fs.writeFileSync(`${dir}/${lang}`, JSON.stringify(dataLang, undefined, 2), 'utf-8');
  }
});

const fs = require('fs');

const baseLang = 'ru';

const dir = 'backend';

const langs = fs.readdirSync(dir);

const baseFiles = fs.readdirSync(`${dir}/${baseLang}`);

baseFiles.forEach(baseFile => {
  const contents = fs.readFileSync(`${dir}/${baseLang}/${baseFile}`, 'utf-8');
  const data = JSON.parse(contents);

  langs.forEach(lang => {
    if (lang !== baseLang && fs.lstatSync(`${dir}/${lang}`).isDirectory()) {
      if (!fs.existsSync(`${dir}/${lang}/${baseFile}`)) {
        fs.writeFileSync(`${dir}/${lang}/${baseFile}`, '{}', 'utf-8');
      }

      const contentsLang = fs.readFileSync(`${dir}/${lang}/${baseFile}`, 'utf-8');

      const dataLang = JSON.parse(contentsLang);

      Object.keys(data).forEach(key => {
        if (dataLang[key] == null) {
          dataLang[key] = key;
        }
      });

      fs.writeFileSync(`${dir}/${lang}/${baseFile}`, JSON.stringify(dataLang, undefined, 2), 'utf-8');
    }
  });
});

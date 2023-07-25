# ArtX TLSproxy I18n

## Backend

To create new translation, go to `backend` and create 
a directory named with the language code. 
Then run the following command to create language files:

```shell
node generate-backend
```

In the `index.json`, specify language title.

## Frontend

To create new translation, go to `frontend` and create a file named `<code>.json` with `{}` contents.
Then run the following command to create default translations:

```shell
node generate-frontend
```

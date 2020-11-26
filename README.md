# テストスクリプト利用手順
自動生成された`test.spec.js`と`page_objects`をルートディレクトリに格納

`npm install`

chromedriverがインストールできない場合は別途インストールする

## 実行

`npm run test`

## ヘッドレスモードで実行
`wdio.conf.js`の以下のコメントアウトを外す

`// args: ['--headless', '--disable-gpu'],`

# テストスクリプト利用手順
自動生成された`test.spec.js`、`page_objects`、`test_data`をルートディレクトリに格納

`npm install`

chromedriverがインストールできない場合は別途インストールする

## テスト実行

`npm run test`

## ヘッドレスモードで実行
`wdio.conf.js`の以下のコメントアウトを外す

```
//   "goog:chromeOptions": {
//     args: ["--headless", "--disable-gpu"]
//   }
```

## テストレポート表示

`npm run report`

Allure Frameworkを用いてテスト結果を出力します。
テスト実行結果は蓄積され、実績がグラフ化されます。
テスト失敗時はスクリーンショットが自動的に取得されます。
スクリーンショットは、テストケースのOverviewのExecution欄の最下部から見られます。
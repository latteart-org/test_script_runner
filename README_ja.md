LatteArt のテスト生成機能により自動生成されたテストスクリプトを実行するためのテンプレートです。

テストフレームワークの [WebdriverIO](https://webdriver.io/) を用いています。

# 準備

- Node.js バージョン 16 以降をインストールする。
- LatteArt のテスト生成機能により自動生成された `test.spec.js`、`page_objects`、`test_data` をルートディレクトリに格納する。
- `npm install` を実行する。
  - 要求された場合、Python をインストールする。

# テスト実行

`npm run test`

# Google Chrome のヘッドレスモードで実行

`wdio.conf.js` の以下のコメントアウトを外す。

```
//   "goog:chromeOptions": {
//     args: ["--headless", "--disable-gpu"]
//   }
```

# テストレポート表示

`npm run report`

要求された場合 Java をインストールする。

[Allure Framework](http://allure.qatools.ru/) を用いてテスト結果を出力します。
テスト実行結果は蓄積され、実績がグラフ化されます。
テスト失敗時はスクリーンショットが自動的に取得されます。
スクリーンショットは、テストケースの Overview の Execution 欄の最下部から見られます。

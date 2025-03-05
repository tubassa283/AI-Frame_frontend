# AI Frame Frontend

このプロジェクトは、AIを活用した要件管理アプリケーションのフロントエンド部分です。ユーザーは要件タイトルと詳細を入力し、AIによって曖昧な部分をリスト化したり、要件を保存したりできます。

## 概要

- 要件タイトルと詳細を入力するフォーム
- 要件詳細は、箇条書きとして入力でき、Enterで新しい項目を追加できます
- AIによって曖昧な部分をリスト化
- 入力後、要件を保存することが可能

## 使用技術

- **Vue 3**: フロントエンドのライブラリ
- **Vue Router**: ページ遷移
- **Axios**: API通信
- **Vite**: ビルドツール

## 画面の説明

### 1. ホームページ
- 要件のリストが表示され、各要件の詳細にアクセスできる。

### 2. 要件作成ページ
- 要件タイトルを入力するテキストフィールド
- 要件詳細を入力するフィールド（箇条書き形式で内容を入力）
- 入力した内容を保存するための「保存」ボタン
- AIによる曖昧な部分のリスト化を行う「AIによる曖昧な部分リスト化」ボタン

### 3. 要件詳細ページ
- 各要件の詳細情報が表示され、編集や削除が可能。

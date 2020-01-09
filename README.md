# README

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :contents

## contents テーブル

| Column  | Type    | Options                        |
| ------- | ------- | ------------------------------ |
| text    | string  | null: false                    |
| image   | string  | null: false                    |
| went    | string  | null: false                    |
| user_id | integer | null: false, foreign_key: true |

### Association

- belongs_to :user

# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :contents

## contentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|
|image|string|
|went|string|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
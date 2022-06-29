alter table "public"."booking" alter column "user_id" drop not null;
alter table "public"."booking" add column "user_id" uuid;

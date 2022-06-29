alter table "public"."booking" alter column "total_price" drop not null;
alter table "public"."booking" add column "total_price" numeric;

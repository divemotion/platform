alter table "public"."booking" add column "created_at" timestamptz
 not null default now();

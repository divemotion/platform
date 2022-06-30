alter table "public"."location" add column "created_at" timestamptz
 null default now();

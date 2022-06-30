alter table "public"."allotment_status" add column "created_at" timestamptz
 null default now();

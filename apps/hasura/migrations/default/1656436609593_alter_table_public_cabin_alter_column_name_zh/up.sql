alter table "public"."cabin" alter column "name_zh" set not null;
alter table "public"."cabin" drop constraint "cabin_name_zh_key";

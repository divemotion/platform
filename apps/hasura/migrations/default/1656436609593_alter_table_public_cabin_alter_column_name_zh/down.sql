alter table "public"."cabin" add constraint "cabin_name_zh_key" unique ("name_zh");
alter table "public"."cabin" alter column "name_zh" drop not null;

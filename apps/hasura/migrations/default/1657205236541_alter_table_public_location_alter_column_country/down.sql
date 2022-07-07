alter table "public"."location" rename column "country_id" to "country";
ALTER TABLE "public"."location" ALTER COLUMN "country" TYPE text;

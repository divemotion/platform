alter table "public"."freebie" alter column "id" set default gen_random_uuid();
ALTER TABLE "public"."freebie" ALTER COLUMN "id" TYPE uuid;

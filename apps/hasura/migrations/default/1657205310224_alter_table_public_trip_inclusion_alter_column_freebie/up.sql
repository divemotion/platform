ALTER TABLE "public"."trip_inclusion" ALTER COLUMN "freebie" TYPE varchar;
alter table "public"."trip_inclusion" rename column "freebie" to "freebie_id";

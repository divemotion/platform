ALTER TABLE "public"."trip_exclusion" ALTER COLUMN "freebie" TYPE varchar;
alter table "public"."trip_exclusion" rename column "freebie" to "freebie_id";

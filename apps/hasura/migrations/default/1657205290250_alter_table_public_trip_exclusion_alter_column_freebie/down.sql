alter table "public"."trip_exclusion" rename column "freebie_id" to "freebie";
ALTER TABLE "public"."trip_exclusion" ALTER COLUMN "freebie" TYPE text;

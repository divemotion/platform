alter table "public"."trip_inclusion" rename column "freebie_id" to "freebie";
ALTER TABLE "public"."trip_inclusion" ALTER COLUMN "freebie" TYPE text;

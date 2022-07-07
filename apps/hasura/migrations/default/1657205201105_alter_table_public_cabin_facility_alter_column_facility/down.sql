alter table "public"."cabin_facility" rename column "facility_id" to "facility";
ALTER TABLE "public"."cabin_facility" ALTER COLUMN "facility" TYPE text;

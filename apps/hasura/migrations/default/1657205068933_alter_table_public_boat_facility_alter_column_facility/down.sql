alter table "public"."boat_facility" rename column "facility_id" to "facility";
ALTER TABLE "public"."boat_facility" ALTER COLUMN "facility" TYPE text;

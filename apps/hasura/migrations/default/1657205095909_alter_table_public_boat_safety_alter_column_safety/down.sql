alter table "public"."boat_safety" rename column "safety_id" to "safety";
ALTER TABLE "public"."boat_safety" ALTER COLUMN "safety" TYPE text;

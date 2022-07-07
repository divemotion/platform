alter table "public"."allotment" rename column "gender_acceptance_id" to "gender_acceptance";
ALTER TABLE "public"."allotment" ALTER COLUMN "gender_acceptance" TYPE text;

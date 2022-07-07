ALTER TABLE "public"."allotment" ALTER COLUMN "gender_acceptance" TYPE varchar;
alter table "public"."allotment" rename column "gender_acceptance" to "gender_acceptance_id";

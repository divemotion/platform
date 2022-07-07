ALTER TABLE "public"."booking_allotment" ALTER COLUMN "license_issuer" TYPE varchar;
alter table "public"."booking_allotment" rename column "license_issuer" to "license_issuer_id";

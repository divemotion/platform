alter table "public"."booking_allotment" rename column "license_issuer_id" to "license_issuer";
ALTER TABLE "public"."booking_allotment" ALTER COLUMN "license_issuer" TYPE text;

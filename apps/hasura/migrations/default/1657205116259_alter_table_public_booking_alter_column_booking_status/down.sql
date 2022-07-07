alter table "public"."booking" rename column "booking_status_id" to "booking_status";
ALTER TABLE "public"."booking" ALTER COLUMN "booking_status" TYPE text;

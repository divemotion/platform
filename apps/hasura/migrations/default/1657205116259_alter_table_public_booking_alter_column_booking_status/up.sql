ALTER TABLE "public"."booking" ALTER COLUMN "booking_status" TYPE varchar;
alter table "public"."booking" rename column "booking_status" to "booking_status_id";

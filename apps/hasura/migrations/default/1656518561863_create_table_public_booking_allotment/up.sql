CREATE TABLE "public"."booking_allotment" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "first_name" Text NOT NULL, "middle_name" text, "last_name" text NOT NULL, "license_id" text, "issuer" text, "booking" uuid NOT NULL, "allotment" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("allotment") REFERENCES "public"."allotment"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("booking") REFERENCES "public"."booking"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_booking_allotment_updated_at"
BEFORE UPDATE ON "public"."booking_allotment"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_booking_allotment_updated_at" ON "public"."booking_allotment" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

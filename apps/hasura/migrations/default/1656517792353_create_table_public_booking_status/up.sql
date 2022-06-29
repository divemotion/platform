CREATE TABLE "public"."booking_status" ("id" text NOT NULL, "description_th" text NOT NULL, "description_en" text NOT NULL, "description_zh" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_booking_status_updated_at"
BEFORE UPDATE ON "public"."booking_status"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_booking_status_updated_at" ON "public"."booking_status" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

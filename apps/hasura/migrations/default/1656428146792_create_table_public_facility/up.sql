CREATE TABLE "public"."facility" ("id" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name_th" text NOT NULL, "name_en" text NOT NULL, "name_zh" text, "is_promoted" boolean NOT NULL DEFAULT false, PRIMARY KEY ("id") , UNIQUE ("id"));
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
CREATE TRIGGER "set_public_facility_updated_at"
BEFORE UPDATE ON "public"."facility"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_facility_updated_at" ON "public"."facility" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

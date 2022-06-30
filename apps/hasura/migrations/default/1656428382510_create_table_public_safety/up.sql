CREATE TABLE "public"."safety" ("id" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name_th" text NOT NULL, "name_en" text NOT NULL, "name_zh" text, "unit_th" text, "unit_en" text, "unit_zh" text, PRIMARY KEY ("id") , UNIQUE ("id"));
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
CREATE TRIGGER "set_public_safety_updated_at"
BEFORE UPDATE ON "public"."safety"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_safety_updated_at" ON "public"."safety" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

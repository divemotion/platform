alter table "public"."booking_allotment"
  add constraint "booking_allotment_license_issuer_fkey"
  foreign key ("license_issuer")
  references "public"."license_issuer"
  ("id") on update restrict on delete restrict;

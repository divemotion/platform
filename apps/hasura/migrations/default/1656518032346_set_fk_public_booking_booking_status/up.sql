alter table "public"."booking"
  add constraint "booking_booking_status_fkey"
  foreign key ("booking_status")
  references "public"."booking_status"
  ("id") on update restrict on delete restrict;

Seed File Ordering
- allotment_status
- boat
- booking_status
- cabin
- country
- facility
- freebie
- gender_acceptance
- license_issuer
- location
- organizer
- safety
- boat_facility
- boat_safety
- cabin_facility
- trip
- trip_exclusion
- trip_inclusion
- trip_location
- allotment
- booking
- booking_allotment

# To create table seed 
Run -> `sudo hasura seed create [table-name] --from-table [table-name]`

E.g. sudo hasura seed create schedule --from-table schedule
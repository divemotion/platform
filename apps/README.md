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

# Example - Get an object from S3
let s3 = new S3Service();
const folder = formatOrganizerLogoImagePath(Config.aws.s3_bucket, org.id);
const signedUrl = s3.signedUrl(folder, org.logo_image_file_name);
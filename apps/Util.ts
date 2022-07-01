export const formatOrganizerLogoImagePath = (bucket: string, organizerId: string) => `${bucket}/organizer/${organizerId}/resources/brand_logo`;
export const formatTripImagePath = (bucket: string, tripId: string) => `${bucket}/trip/${tripId}/resources/images`;
export const formatTripPromoteImagePath = (bucket: string, tripId: string) => `${bucket}/trip/${tripId}/resources/images/promote`;
export const formatBoatImagePath = (bucket: string, boatId: string) => `${bucket}/boat/${boatId}/resources/images`;
export const formatBoatPromoteImagePath = (bucket: string, boatId: string) => `${bucket}/boat/${boatId}/resources/images/promote`;
export const formatCabinImagePath = (bucket: string, cabinId: string) => `${bucket}/cabin/${cabinId}/resources/images`;
export const formatCabinPromoteImagePath = (bucket: string, cabinId: string) => `${bucket}/cabin/${cabinId}/resources/images/promote`;
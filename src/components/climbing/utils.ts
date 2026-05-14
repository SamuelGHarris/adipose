import { ClimbingType } from "$lib/prisma/enums"

export const climbingTypeToString = (type: ClimbingType) => {
  switch(type) {
    case ClimbingType.BOULDERING:
      return 'Bouldering';
    case ClimbingType.LEAD:
      return 'Lead';
    case ClimbingType.TOP_ROPE:
      return 'Top Rope';
  };
};
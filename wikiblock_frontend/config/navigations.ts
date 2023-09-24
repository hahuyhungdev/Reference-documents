export const pageRoutes = {
  signIn: {
    pathname: "/sign-in",
    isAuthenticated: false,
  },
  overview: {
    pathname: "/",
    isAuthenticated: true,
  },
  user: {
    pathname: "/users",
    isAuthenticated: true,
    userProfile: {
      pathname: "/profile",
      isAuthenticated: true,
    },
    userAddress: {
      pathname: "/address",
      isAuthenticated: true,
    },
    userSubscribe: {
      pathname: "/subscribe",
      isAuthenticated: true,
    },
    userSeciruty: {
      pathname: "/security",
      isAuthenticated: true,
    },
  },
  giving: {
    pathname: "/giving",
    isAuthenticated: true,
  },
  upadateGiving: {
    pathname: "/giving/[id]/update",
    isAuthenticated: true,
  },
  receiving: {
    pathname: "/order",
    isAuthenticated: true,
  },
  newRequest: {
    pathname: "/request",
    isAuthenticated: true,
  },
  shippingZones: {
    pathname: "/settings/shipping/zones",
    isAuthenticated: true,
  },
  shippingCarriers: {
    pathname: "/settings/shipping/carriers",
    isAuthenticated: true,
  },
};

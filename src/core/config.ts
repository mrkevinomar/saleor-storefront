import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "ferazo@feconsultoresconstructores.com";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    href: "https://js.stripe.com/v3/",
    label: "Stripe",
  },
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePageUrl("about"),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: "https://www.facebook.com/NuevoEdificioAguaMarina/",
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    href: "https://www.instagram.com/feconsconst/",
    path: require("../images/instagram-icon.svg"),
  },
  /*{
    ariaLabel: "twitter",
    href: "https://twitter.com/getsaleor",
    path: require("../images/twitter-icon.svg"),
  },*/
  {
    ariaLabel: "youtube",
    href: "https://www.youtube.com/channel/UCAJvExsJ3_dKZ2KUXytZtcQ/videos",
    path: require("../images/youtube-icon.svg"),
  },
];
export const META_DEFAULTS = {
  custom: [],
  description:
    "Tienda Virtual FE Consultores&Constructores",
  image: `${window.location.origin}${require("../images/logo-fe.png")}`,
  title: "FE Tienda Virtual",
  type: "website",
  url: window.location.origin,
};
export enum CheckoutStep {
  Address = 1,
  Shipping,
  Payment,
  Review,
}
export const CHECKOUT_STEPS = [
  {
    index: 0,
    link: "/checkout/address",
    name: "Dirección",
    nextActionName: "Continuar a Envío",
    nextStepLink: "/checkout/shipping",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Address,
  },
  {
    index: 1,
    link: "/checkout/shipping",
    name: "Envío",
    nextActionName: "Continuar a Pago",
    nextStepLink: "/checkout/payment",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Shipping,
  },
  {
    index: 2,
    link: "/checkout/payment",
    name: "Pago",
    nextActionName: "Revisar Pedido",
    nextStepLink: "/checkout/review",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Payment,
  },
  {
    index: 3,
    link: "/checkout/review",
    name: "Resumen",
    nextActionName: "Confirmar Pedido",
    nextStepLink: "/order-finalized",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Review,
  },
];

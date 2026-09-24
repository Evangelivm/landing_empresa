const WHATSAPP_NUMBER = "+51976357117";
const WHATSAPP_MESSAGE =
  "Hola, quiero contarles cómo opera mi empresa y ver si pueden ayudarnos.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

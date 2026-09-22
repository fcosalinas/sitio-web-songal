// Canales oficiales de contacto de Surmetric.
// WhatsApp: número de negocio Surmetric gestionado en Kapso.
export const CONTACT_EMAIL = "contacto@surmetric.cl";
export const WA_NUMBER = "56965488368";
export const WA_DISPLAY = "+56 9 6548 8368";
export const WA_DEFAULT_TEXT =
  "Hola, me interesa saber más sobre sus servicios";

export function buildWaLink(text: string = WA_DEFAULT_TEXT): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Canales oficiales de contacto de Surmetric.
export const CONTACT_EMAIL = "contacto@surmetric.cl";

export type WaContact = { name: string; number: string; display: string };

// Contactos de WhatsApp de los socios. El primero es el canal por defecto
// (botón flotante y menú de WhatsApp).
export const WA_CONTACTS: WaContact[] = [
  { name: "Francisco", number: "56984184979", display: "+56 9 8418 4979" },
  { name: "Alfredo", number: "56995094992", display: "+56 9 9509 4992" },
];

export const WA_DEFAULT_TEXT =
  "Hola, me interesa saber más sobre sus servicios";

export function buildWaLink(
  text: string = WA_DEFAULT_TEXT,
  number: string = WA_CONTACTS[0].number,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

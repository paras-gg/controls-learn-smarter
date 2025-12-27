const WHATSAPP_NUMBER = '6282154945903';

export const getWhatsAppLink = (message?: string): string => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
};

export const getProductWhatsAppLink = (productTitle: string): string => {
  const message = `Halo Controls! Saya tertarik dengan produk "${productTitle}". Mohon informasi lebih lanjut.`;
  return getWhatsAppLink(message);
};

export const getGeneralWhatsAppLink = (): string => {
  const message = 'Halo Controls! Saya ingin bertanya tentang produk edukasi finance Anda.';
  return getWhatsAppLink(message);
};

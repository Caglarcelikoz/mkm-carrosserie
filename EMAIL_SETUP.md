# Email Setup met Resend

## Configuratie

Om de contact functionaliteit te gebruiken, moet je de volgende environment variabelen instellen:

### 1. Maak een `.env.local` bestand in de root directory:

```bash
# Resend Configuration
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=info@mkmcarrosserie.be

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Site Configuration
NEXT_PUBLIC_CONTACT_EMAIL=info@mkmcarrosserie.be
NEXT_PUBLIC_PHONE=+31-xxx-xxx-xxx
```

### 2. Resend API Key verkrijgen:

1. Ga naar [resend.com](https://resend.com)
2. Maak een account aan
3. Ga naar API Keys in je dashboard
4. Genereer een nieuwe API key
5. Kopieer de API key naar je `.env.local` bestand

### 3. Domain verificatie:

1. Voeg je domain toe in Resend dashboard
2. Verifieer je domain met DNS records
3. Update de `from` email in `/src/app/api/contact/route.ts` naar je geverifieerde domain

### 4. Veiligheidsfeatures:

De implementatie bevat de volgende veiligheidsmaatregelen:

- **Rate Limiting**: Max 3 requests per 15 minuten per IP
- **Input Validatie**: Zod schema validatie voor alle inputs
- **XSS Bescherming**: Input sanitization
- **CSRF Bescherming**: Built-in Next.js bescherming
- **Error Handling**: Veilige error responses zonder gevoelige info

### 5. Testen:

1. Start de development server: `npm run dev`
2. Ga naar de contact pagina
3. Vul het formulier in en test de functionaliteit

## Productie Deployment:

Voor productie:

1. Stel de environment variabelen in op je hosting platform
2. Zorg dat je domain geverifieerd is bij Resend
3. Update de `NEXT_PUBLIC_SITE_URL` naar je productie URL (https://mkmcarrosserie.be)

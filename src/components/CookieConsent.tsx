"use client";

import { useEffect } from "react";
import * as CookieConsentLib from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

/** GA4 measurement ID (G-…). Without it there is no banner and no tracking. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const PRIVACY_URL = "/privacy";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Load GA4 only after the visitor accepted the analytics category ("basic"
 * Consent Mode v2): before that, nothing — not even a cookieless ping — is
 * sent to Google. The ad signals stay denied until an "Advertenties" category
 * exists. GA4's enhanced measurement records client-side navigations itself.
 */
function loadGoogleAnalytics(id: string) {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", id);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}

function loadIfAccepted(id: string) {
  if (CookieConsentLib.acceptedCategory("analytics")) {
    loadGoogleAnalytics(id);
  }
}

/**
 * The cookie banner (orestbida/cookieconsent). Renders nothing itself; the
 * library injects its own UI.
 */
const CookieConsent = () => {
  useEffect(() => {
    if (!GA_ID) return;
    const gaId = GA_ID;

    CookieConsentLib.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom left",
          equalWeightButtons: true,
        },
        preferencesModal: { layout: "box", equalWeightButtons: true },
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }],
            // Reload so the already-loaded GA script is gone too.
            reloadPage: true,
          },
        },
      },
      onConsent: () => loadIfAccepted(gaId),
      onChange: () => loadIfAccepted(gaId),
      language: {
        default: "nl",
        translations: {
          nl: {
            consentModal: {
              title: "Wij gebruiken cookies",
              description: `Met uw toestemming gebruiken we analytische cookies (Google Analytics) om te begrijpen hoe bezoekers onze website gebruiken, zodat we ze kunnen verbeteren. U kiest zelf: weigeren heeft geen gevolgen voor het gebruik van de site. Meer info in ons <a href="${PRIVACY_URL}">privacy- en cookiebeleid</a>.`,
              acceptAllBtn: "Accepteren",
              acceptNecessaryBtn: "Weigeren",
              showPreferencesBtn: "Voorkeuren instellen",
            },
            preferencesModal: {
              title: "Cookievoorkeuren",
              acceptAllBtn: "Alles accepteren",
              acceptNecessaryBtn: "Alles weigeren",
              savePreferencesBtn: "Voorkeuren opslaan",
              closeIconLabel: "Sluiten",
              sections: [
                {
                  title: "Strikt noodzakelijk",
                  description:
                    "Deze cookie onthoudt uw cookiekeuze. Zonder deze cookie zouden we u bij elk bezoek opnieuw moeten vragen. Ze kan niet worden uitgeschakeld.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Statistieken",
                  description:
                    "Google Analytics helpt ons te begrijpen hoeveel bezoekers de site heeft, welke pagina's bekeken worden en hoe bezoekers bij ons terechtkomen. Deze gegevens worden niet gebruikt voor advertenties.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Meer informatie",
                  description: `Vragen over cookies of uw gegevens? Lees ons <a href="${PRIVACY_URL}">privacy- en cookiebeleid</a> of mail naar <a href="mailto:info@mkmcarrosserie.be">info@mkmcarrosserie.be</a>.`,
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
};

export default CookieConsent;

/** Reopens the preferences so visitors can change or withdraw consent. */
export const CookieSettingsButton = ({ className }: { className?: string }) => {
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      onClick={() => CookieConsentLib.showPreferences()}
      className={className}
    >
      Cookie-instellingen
    </button>
  );
};

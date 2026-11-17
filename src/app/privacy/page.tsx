import { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy- en cookiebeleid",
  description:
    "Hoe MKM Carrosserie omgaat met uw persoonsgegevens en welke cookies onze website gebruikt.",
  alternates: {
    canonical: "https://mkmcarrosserie.be/privacy",
  },
};

const LAST_UPDATED = "november 2026";

const SECTIONS = [
  { id: "wie-zijn-wij", title: "Wie is verantwoordelijk?" },
  { id: "welke-gegevens", title: "Welke gegevens verwerken we?" },
  { id: "doeleinden", title: "Waarvoor en op welke grond?" },
  { id: "cookies", title: "Cookies en Google Analytics" },
  { id: "derden", title: "Externe dienstverleners" },
  { id: "bewaartermijnen", title: "Hoe lang bewaren we uw gegevens?" },
  { id: "beveiliging", title: "Beveiliging" },
  { id: "rechten", title: "Uw rechten" },
  { id: "wijzigingen", title: "Wijzigingen aan dit beleid" },
] as const;

const COOKIES = [
  {
    name: "cc_cookie",
    provider: "MKM Carrosserie",
    purpose: "Onthoudt uw cookiekeuze",
    category: "Strikt noodzakelijk",
    duration: "6 maanden",
  },
  {
    name: "_ga",
    provider: "Google",
    purpose: "Onderscheidt unieke bezoekers voor statistieken",
    category: "Statistieken (alleen met toestemming)",
    duration: "2 jaar",
  },
  {
    name: "_ga_<ID>",
    provider: "Google",
    purpose: "Houdt de sessie bij voor statistieken",
    category: "Statistieken (alleen met toestemming)",
    duration: "2 jaar",
  },
  {
    name: "o.a. NID",
    provider: "Google (Google Maps)",
    purpose: "Geplaatst door de ingesloten Google Maps-kaart op de contactpagina",
    category: "Ingesloten dienst van derden",
    duration: "Bepaald door Google (tot 6 maanden)",
  },
] as const;

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-bold">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  const linkClass = "text-foreground underline underline-offset-4";

  return (
    <div className="py-12 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Privacy- en cookiebeleid
            </h1>
            <p className="text-sm text-muted-foreground">
              Laatst bijgewerkt: {LAST_UPDATED}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wij hechten belang aan uw privacy. In dit beleid leggen we uit
              welke persoonsgegevens we verzamelen via onze website, waarom we
              dat doen, hoe lang we ze bewaren en welke rechten u heeft. We
              verwerken uw gegevens in overeenstemming met de Algemene
              Verordening Gegevensbescherming (AVG/GDPR).
            </p>
          </header>

          <nav
            aria-label="Inhoud"
            className="rounded-2xl border border-border p-6"
          >
            <h2 className="font-bold mb-3">Inhoud</h2>
            <ol className="space-y-1 list-decimal list-inside text-muted-foreground">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-foreground">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <Section id="wie-zijn-wij" number={1} title={SECTIONS[0].title}>
            <p>
              Verantwoordelijk voor de verwerking van uw persoonsgegevens is{" "}
              <strong className="text-foreground">MKM Solutions BV</strong>,
              handelend onder de naam MKM Carrosserie, met zetel te{" "}
              {SITE_CONFIG.address}, ondernemingsnummer BE 0802.101.908.
            </p>
            <p>
              Voor vragen over uw gegevens kunt u ons bereiken via{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className={linkClass}>
                {SITE_CONFIG.email}
              </a>{" "}
              of {SITE_CONFIG.phone}.
            </p>
          </Section>

          <Section id="welke-gegevens" number={2} title={SECTIONS[1].title}>
            <h3 className="font-semibold text-foreground">
              Gegevens die u zelf verstrekt
            </h3>
            <p>
              Wanneer u ons contactformulier invult, verwerken we uw voornaam,
              achternaam, e-mailadres, telefoonnummer (optioneel), de gekozen
              dienst (optioneel) en uw bericht. Neemt u telefonisch of per
              e-mail contact op, dan verwerken we de gegevens die u ons daarbij
              geeft.
            </p>
            <h3 className="font-semibold text-foreground">
              Gegevens die automatisch worden verzameld
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Technische gegevens zoals uw IP-adres, browsertype en het
                tijdstip van uw bezoek, die onze hostingprovider in serverlogs
                bijhoudt om de website veilig en werkend te houden.
              </li>
              <li>
                Gebruiksgegevens via Google Analytics, zoals bezochte pagina&apos;s,
                hoe u op onze site terechtkwam, uw apparaattype en een
                benaderende locatie (land/regio) — <strong className="text-foreground">alleen als u daarvoor toestemming geeft</strong>.
              </li>
            </ul>
          </Section>

          <Section id="doeleinden" number={3} title={SECTIONS[2].title}>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">
                  Uw contactaanvraag beantwoorden
                </strong>{" "}
                en u een offerte of advies bezorgen. Dit gebeurt op uw verzoek,
                met het oog op een mogelijke overeenkomst (art. 6.1.b AVG).
              </li>
              <li>
                <strong className="text-foreground">
                  De website beveiligen en laten werken
                </strong>
                , inclusief het tonen van onze locatie op een kaart. Hiervoor
                steunen we op ons gerechtvaardigd belang (art. 6.1.f AVG).
              </li>
              <li>
                <strong className="text-foreground">
                  Bezoekersstatistieken bijhouden
                </strong>{" "}
                om onze website te verbeteren. Dit doen we uitsluitend met uw
                toestemming (art. 6.1.a AVG), die u op elk moment kunt
                intrekken.
              </li>
              <li>
                <strong className="text-foreground">
                  Wettelijke verplichtingen nakomen
                </strong>
                , bijvoorbeeld onze boekhoudkundige verplichtingen wanneer een
                aanvraag tot een opdracht leidt (art. 6.1.c AVG).
              </li>
            </ul>
            <p>
              We verkopen uw gegevens niet en gebruiken ze niet voor
              nieuwsbrieven of advertenties.
            </p>
          </Section>

          <Section id="cookies" number={4} title={SECTIONS[3].title}>
            <p>
              Cookies zijn kleine bestanden die op uw toestel worden opgeslagen.
              Onze website plaatst alleen een strikt noodzakelijke cookie die
              uw cookiekeuze onthoudt. Google Analytics wordt pas geladen nadat
              u via de cookiebanner toestemming geeft voor
              &quot;Statistieken&quot;; zonder toestemming worden er geen
              gegevens naar Google Analytics gestuurd en geen analytische
              cookies geplaatst. We hebben Google Signals uitgeschakeld en
              gebruiken deze gegevens niet voor advertenties.
            </p>
            <p>
              Op de contactpagina tonen we een ingesloten kaart van Google Maps
              zodat u ons gemakkelijk kunt vinden. Bij het laden van die kaart
              ontvangt Google uw IP-adres en kan Google eigen cookies plaatsen.
              Wilt u dat vermijden, dan kunt u in plaats daarvan onze
              adresgegevens gebruiken of de kaart laten blokkeren in uw
              browserinstellingen. Zie ook het{" "}
              <a
                href="https://policies.google.com/privacy?hl=nl"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                privacybeleid van Google
              </a>
              .
            </p>

            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="p-3 font-semibold">Cookie</th>
                    <th className="p-3 font-semibold">Aanbieder</th>
                    <th className="p-3 font-semibold">Doel</th>
                    <th className="p-3 font-semibold">Categorie</th>
                    <th className="p-3 font-semibold">Bewaarduur</th>
                  </tr>
                </thead>
                <tbody>
                  {COOKIES.map((c) => (
                    <tr key={c.name} className="border-t border-border">
                      <td className="p-3 font-mono text-foreground whitespace-nowrap">
                        {c.name}
                      </td>
                      <td className="p-3">{c.provider}</td>
                      <td className="p-3">{c.purpose}</td>
                      <td className="p-3">{c.category}</td>
                      <td className="p-3">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              U kunt uw keuze op elk moment wijzigen of intrekken via{" "}
              <CookieSettingsButton className={`${linkClass} cursor-pointer`} />{" "}
              (ook onderaan elke pagina). Trekt u uw toestemming in, dan
              verwijderen we de analytische cookies. U kunt cookies ook
              verwijderen of blokkeren via de instellingen van uw browser.
            </p>
          </Section>

          <Section id="derden" number={5} title={SECTIONS[4].title}>
            <p>
              We werken met een beperkt aantal dienstverleners die gegevens in
              onze opdracht verwerken. Zij krijgen alleen de gegevens die nodig
              zijn voor hun taak.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Vercel Inc.</strong> (VS) —
                hosting van de website en serverlogs.
              </li>
              <li>
                <strong className="text-foreground">Resend</strong> (VS) —
                verzending van de berichten uit ons contactformulier naar onze
                mailbox.
              </li>
              <li>
                <strong className="text-foreground">Google Ireland Ltd.</strong>{" "}
                — Google Analytics (alleen met uw toestemming) en de ingesloten
                Google Maps-kaart.
              </li>
            </ul>
            <p>
              Sommige van deze partijen kunnen gegevens verwerken buiten de
              Europese Economische Ruimte, met name in de Verenigde Staten. Die
              doorgifte gebeurt op basis van het EU-VS Data Privacy Framework
              of de standaardcontractbepalingen van de Europese Commissie.
            </p>
          </Section>

          <Section id="bewaartermijnen" number={6} title={SECTIONS[5].title}>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Contactaanvragen</strong>:
                tot maximaal 2 jaar na het laatste contact. Leidt een aanvraag
                tot een opdracht, dan bewaren we de gegevens die nodig zijn voor
                de facturatie zo lang als de boekhoudwetgeving vereist.
              </li>
              <li>
                <strong className="text-foreground">
                  Google Analytics-gegevens
                </strong>
                : 2 maanden, waarna Google ze automatisch verwijdert.
              </li>
              <li>
                <strong className="text-foreground">Serverlogs</strong>: een
                beperkte periode, volgens de standaardtermijnen van onze
                hostingprovider.
              </li>
              <li>
                <strong className="text-foreground">Cookies</strong>: zie de
                tabel hierboven.
              </li>
            </ul>
          </Section>

          <Section id="beveiliging" number={7} title={SECTIONS[6].title}>
            <p>
              We nemen passende technische en organisatorische maatregelen om
              uw gegevens te beschermen, zoals een versleutelde verbinding
              (HTTPS), beperkte toegang tot gegevens en controle op misbruik van
              het contactformulier.
            </p>
          </Section>

          <Section id="rechten" number={8} title={SECTIONS[7].title}>
            <p>U heeft het recht om:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>uw gegevens in te zien;</li>
              <li>onjuiste gegevens te laten verbeteren;</li>
              <li>uw gegevens te laten wissen;</li>
              <li>de verwerking te laten beperken;</li>
              <li>bezwaar te maken tegen de verwerking;</li>
              <li>uw gegevens over te dragen (dataportabiliteit);</li>
              <li>
                uw toestemming op elk moment in te trekken, zonder dat dit
                gevolgen heeft voor eerdere verwerking.
              </li>
            </ul>
            <p>
              Stuur uw verzoek naar{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className={linkClass}>
                {SITE_CONFIG.email}
              </a>
              . We antwoorden binnen één maand. Bent u niet tevreden over hoe
              we met uw gegevens omgaan, dan kunt u een klacht indienen bij de{" "}
              <a
                href="https://www.gegevensbeschermingsautoriteit.be"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Gegevensbeschermingsautoriteit
              </a>{" "}
              (Drukpersstraat 35, 1000 Brussel, contact@apd-gba.be).
            </p>
          </Section>

          <Section id="wijzigingen" number={9} title={SECTIONS[8].title}>
            <p>
              We kunnen dit beleid aanpassen, bijvoorbeeld wanneer onze website
              of de wetgeving verandert. De meest recente versie staat altijd
              op deze pagina. Vragen? Neem gerust{" "}
              <Link href="/contact" className={linkClass}>
                contact
              </Link>{" "}
              met ons op.
            </p>
          </Section>
        </article>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance informatique à Belfort | NEXASYSTEM",
  description:
    "NEXASYSTEM propose des services de maintenance informatique à Belfort et dans le Territoire de Belfort : dépannage, assistance, prévention, sécurisation et optimisation des systèmes informatiques.",
  keywords: [
    "maintenance informatique Belfort",
    "dépannage informatique Belfort",
    "assistance informatique Belfort",
    "technicien informatique Belfort",
    "maintenance PC entreprise Belfort",
    "maintenance réseau Belfort",
    "support informatique Belfort",
    "informatique entreprise Belfort",
    "Territoire de Belfort",
  ],
  alternates: {
    canonical:
      "https://nexasystem-iota.vercel.app/maintenance-informatique",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MaintenanceInformatiquePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Maintenance informatique pour entreprises
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Belfort • Territoire de Belfort
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Maintenance informatique
              <span className="block text-blue-500">
                à Belfort et dans le Territoire de Belfort
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              NEXASYSTEM accompagne les TPE, PME, artisans et organisations
              dans la maintenance et le dépannage de leur informatique.
              Nous intervenons pour maintenir vos équipements, résoudre les
              incidents et améliorer la fiabilité de votre environnement
              informatique.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
              >
                Demander une intervention
              </a>

              <a
                href="/#services"
                className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:border-blue-500 hover:bg-slate-900"
              >
                Découvrir nos services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Support informatique
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Une informatique fiable pour votre activité
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Une panne informatique peut rapidement perturber l'activité
                d'une entreprise. NEXASYSTEM vous accompagne dans la
                résolution de vos problèmes informatiques et dans la
                maintenance de votre environnement numérique.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Notre objectif est de limiter les interruptions, améliorer la
                sécurité de vos équipements et vous permettre de travailler
                dans de bonnes conditions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold">
                Nos interventions peuvent notamment concerner :
              </h3>

              <ul className="mt-6 space-y-4 text-slate-600">
                <li>✓ Diagnostic des problèmes informatiques</li>
                <li>✓ Dépannage des postes de travail</li>
                <li>✓ Assistance informatique</li>
                <li>✓ Maintenance préventive</li>
                <li>✓ Maintenance réseau</li>
                <li>✓ Optimisation des équipements</li>
                <li>✓ Sécurisation des systèmes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Nos services
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Des solutions de maintenance adaptées aux entreprises
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              NEXASYSTEM intervient sur différents aspects de votre
              infrastructure informatique afin de contribuer à sa disponibilité
              et à sa sécurité.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-3xl">🖥️</div>
              <h3 className="mt-5 text-xl font-bold">
                Dépannage informatique
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Diagnostic et résolution des problèmes rencontrés sur vos
                ordinateurs et équipements informatiques.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-3xl">🔧</div>
              <h3 className="mt-5 text-xl font-bold">
                Maintenance préventive
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Vérification et entretien de votre environnement informatique
                afin de réduire les risques de panne.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-3xl">🌐</div>
              <h3 className="mt-5 text-xl font-bold">
                Maintenance réseau
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Assistance sur votre réseau informatique, vos équipements
                réseau et votre connectivité.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-3xl">🔐</div>
              <h3 className="mt-5 text-xl font-bold">
                Sécurisation informatique
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Identification des risques et mise en place de bonnes
                pratiques pour renforcer la sécurité de votre système.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-3xl">☁️</div>
              <h3 className="mt-5 text-xl font-bold">
                Accompagnement cloud
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Accompagnement dans l'utilisation et l'organisation de vos
                solutions cloud et services numériques.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-3xl">💼</div>
              <h3 className="mt-5 text-xl font-bold">
                Support aux entreprises
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Assistance informatique adaptée aux besoins des TPE, PME,
                artisans et organisations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Intervention locale
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Maintenance informatique à Belfort
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                NEXASYSTEM est orientée vers les entreprises de Belfort et du
                Territoire de Belfort. Nous privilégions une approche de
                proximité afin de comprendre les besoins spécifiques de chaque
                organisation.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Selon les besoins, les interventions peuvent être réalisées
                directement auprès des clients ou à distance lorsque cela est
                possible.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-8 text-white">
              <h3 className="text-2xl font-bold">
                Secteurs géographiques
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-4">
                  Belfort
                </div>

                <div className="rounded-lg border border-slate-800 p-4">
                  Territoire de Belfort
                </div>

                <div className="rounded-lg border border-slate-800 p-4">
                  Bourgogne-Franche-Comté
                </div>

                <div className="rounded-lg border border-slate-800 p-4">
                  Entreprises locales
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Pour les professionnels
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Une assistance informatique pour les TPE, PME et artisans
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600">
            Que vous soyez artisan, indépendant, TPE, PME ou organisation,
            NEXASYSTEM peut vous accompagner dans vos besoins liés aux systèmes,
            réseaux, équipements et services informatiques.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "TPE",
              "PME",
              "Artisans",
              "Indépendants",
              "Organisations",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Besoin d'une maintenance informatique à Belfort ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Présentez-nous votre besoin informatique et échangeons sur la
            solution la plus adaptée à votre entreprise.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}
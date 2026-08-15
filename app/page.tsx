"use client";

import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setFormMessage("");
    setFormSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      nom: formData.get("nom"),
      entreprise: formData.get("entreprise"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      projet: formData.get("projet"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Une erreur est survenue lors de l'envoi."
        );
      }

      setFormSuccess(true);
      setFormMessage(
        "Votre demande a bien été envoyée. Nous vous répondrons rapidement."
      );

      form.reset();
    } catch (error) {
      console.error(error);

      setFormSuccess(false);
      setFormMessage(
        "Impossible d'envoyer votre demande. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="sticky top-0 z-50 h-[90px] border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">

            {/* LOGO */}
            <a
              href="#accueil"
              className="flex items-center"
              aria-label="NEXASYSTEM - Accueil"
            >
              <Image
                 src="/logo-nexasystem.png"
                 alt="Logo NEXASYSTEM"
                 width={190}
                 height={95}
                 className="w-[190px] h-[95px] object-contain"
              />
    </a>

          {/* MENU */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a
              href="#accueil"
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              Accueil
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              Services
            </a>

            <a
              href="#developpement"
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              Développement
            </a>

            <a
              href="#solutions"
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              Solutions
            </a>

            <a
              href="#apropos"
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              À propos
            </a>

            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Nous contacter
            </a>
          </nav>

          {/* MENU MOBILE */}
          <button
           type="button"
           onClick={() => setMenuOpen(!menuOpen)}
           className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-white lg:hidden"
           aria-label="Ouvrir le menu"
           aria-expanded={menuOpen}
           >
           {menuOpen ? "Fermer" : "Menu"}
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="border-b border-slate-800 bg-slate-950 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            
            <a
            href="#accueil"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
        Accueil
      </a>

      <a
        href="#services"
        onClick={() => setMenuOpen(false)}
        className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
        Services
      </a>

      <a
        href="#developpement"
        onClick={() => setMenuOpen(false)}
        className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
        Développement web & mobile
      </a>

      <a
        href="#solutions"
        onClick={() => setMenuOpen(false)}
        className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
        Solutions
      </a>

      <a
        href="#apropos"
        onClick={() => setMenuOpen(false)}
        className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
        À propos
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
      >
        Nous contacter
      </a>

    </div>
  </nav>
)}

      {/* =========================
          HERO
      ========================== */}
      <section
  id="accueil"
  className="relative overflow-hidden bg-slate-950 text-white"
>
  {/* EFFETS LUMINEUX */}
  <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
  <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
    <div className="grid items-center gap-12 lg:grid-cols-2">

      {/* TEXTE */}
      <div>

        {/* BADGE */}
        <div className="mb-5 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-400" />

          <span className="text-sm font-medium text-blue-300">
            Solutions informatiques pour entreprises
          </span>
        </div>

        {/* DOMAINES */}
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-sm">
          Systèmes • Réseaux • Cybersécurité • Cloud
        </p>

        {/* TITRE */}
<h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[54px]">
  Votre partenaire
  <br />

  <span className="text-blue-500">
    informatique à Belfort
  </span>

  <br />

  et dans le Territoire de Belfort.
</h1>

{/* DESCRIPTION */}
<p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
  NEXASYSTEM accompagne les TPE, PME, artisans et organisations
  de Belfort et du Territoire de Belfort dans la conception,
  la sécurisation et la modernisation de leur environnement informatique.
</p>

<p className="mt-3 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
    Nous intervenons en systèmes et réseaux, cybersécurité, maintenance
    informatique, cloud ainsi qu'en développement de sites web et
    d'applications sur mesure.
</p>

        {/* BOUTONS */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">

          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-6 py-3.5 text-center font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Demander un devis
          </a>

          <a
            href="#services"
            className="rounded-lg border border-slate-700 bg-white/5 px-6 py-3.5 text-center font-semibold text-white transition hover:border-blue-500 hover:bg-blue-500/10"
          >
            Découvrir nos services
          </a>

        </div>

        {/* GARANTIES */}
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
          <span>✓ Solutions sur mesure</span>
          <span>✓ Accompagnement professionnel</span>
          <span>✓ Sécurité au cœur de nos solutions</span>
        </div>

      </div>

      {/* PHOTO PROFESSIONNELLE */}
      <div className="hidden lg:block">
        <div className="relative mx-auto max-w-md">

          <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl shadow-blue-950/50">

            <Image
              src="/photo-professionnelle.jpg"
              alt="Professionnel NEXASYSTEM dans un environnement informatique"
              width={1536}
              height={2048}
              className="h-[560px] w-full object-cover object-center"
              priority
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                NEXASYSTEM
              </p>

              <p className="mt-1 text-base font-bold text-white">
                Systèmes • Réseaux • Cybersécurité • Développement Web
              </p>
            </div>

          </div>

          {/* BADGE FLOTTANT */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-blue-500/30 bg-blue-600 p-4 shadow-xl shadow-blue-600/20">
            <p className="text-xs font-medium text-blue-100">
              Votre informatique
            </p>

            <p className="mt-1 text-xl font-bold text-white">
              Notre expertise
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* =========================
          SERVICES
      ========================== */}
      <section
        id="services"
        className="bg-slate-50 py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Nos services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Services informatiques pour les entreprises à Belfort
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nous vous accompagnons dans la mise en place, la sécurisation
              et l'évolution de votre environnement informatique et numérique.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* SERVICE 1 */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">🌐</div>

              <h3 className="mt-6 text-xl font-bold">
                Systèmes & Réseaux
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Installation, configuration et administration de vos réseaux,
                serveurs et équipements informatiques.
              </p>

            </article>

            {/* SERVICE 2 */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">🔐</div>

              <h3 className="mt-6 text-xl font-bold">
                Cybersécurité
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Protection de vos systèmes, de vos postes de travail et de vos
                données contre les menaces informatiques.
              </p>

            </article>

            {/* SERVICE 3 */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">☁️</div>

              <h3 className="mt-6 text-xl font-bold">
                Cloud & Solutions
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Accompagnement dans vos projets cloud et modernisation de
                votre infrastructure informatique.
              </p>

            </article>

            {/* SERVICE 4 */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">🖥️</div>

              <h3 className="mt-6 text-xl font-bold">
                Maintenance informatique
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Maintenance préventive et corrective pour assurer la
                disponibilité et la fiabilité de vos équipements.
              </p>

            </article>

            {/* SERVICE 5 */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">🛠️</div>

              <h3 className="mt-6 text-xl font-bold">
                Support informatique
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Assistance technique et accompagnement de vos collaborateurs
                au quotidien.
              </p>

            </article>

            {/* SERVICE 6 */}
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">📊</div>

              <h3 className="mt-6 text-xl font-bold">
                Audit informatique
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Analyse de votre infrastructure et recommandations pour
                améliorer performance, sécurité et fiabilité.
              </p>

            </article>

            {/* SERVICE 7 */}
            <article className="rounded-2xl border-2 border-blue-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg">

              <div className="text-4xl">💻</div>

              <h3 className="mt-6 text-xl font-bold">
                Création de sites web & applications
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Conception de sites vitrines, sites e-commerce, applications
                web et applications mobiles modernes, performantes et
                adaptées aux besoins de votre entreprise.
              </p>

            </article>

          </div>
        </div>
      </section>

      {/* =========================
          DEVELOPPEMENT WEB & MOBILE
      ========================== */}
      <section
        id="developpement"
        className="bg-white py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* TEXTE */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Développement numérique
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Donnez vie à vos projets web et mobiles
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                NEXASYSTEM développe des solutions numériques adaptées aux
                besoins des entreprises, associations, indépendants et
                collectivités.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                De la simple vitrine professionnelle à l'application métier
                sur mesure, nous construisons des solutions modernes,
                rapides et adaptées à vos utilisateurs.
              </p>

              <div className="mt-8">

                <a
                  href="#contact"
                  className="inline-block rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Parlons de votre projet
                </a>

              </div>

            </div>

            {/* CARTES */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* SITE VITRINE */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

                <div className="text-3xl">
                  🌍
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  Sites vitrines
                </h3>

                <p className="mt-2 leading-6 text-slate-600">
                  Présentez votre activité avec un site professionnel,
                  responsive et optimisé.
                </p>

              </div>

              {/* ECOMMERCE */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

                <div className="text-3xl">
                  🛒
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  E-commerce
                </h3>

                <p className="mt-2 leading-6 text-slate-600">
                  Développez votre activité grâce à une boutique en ligne
                  moderne et adaptée à vos clients.
                </p>

              </div>

              {/* MOBILE */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

                <div className="text-3xl">
                  📱
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  Applications mobiles
                </h3>

                <p className="mt-2 leading-6 text-slate-600">
                  Des applications mobiles pensées pour vos utilisateurs
                  et vos besoins métier.
                </p>

              </div>

              {/* WEB */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

                <div className="text-3xl">
                  ⚙️
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  Applications web
                </h3>

                <p className="mt-2 leading-6 text-slate-600">
                  Des outils web sur mesure pour automatiser et améliorer
                  votre activité.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          SOLUTIONS
      ========================== */}
      <section
        id="solutions"
        className="bg-slate-50 py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Nos solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Des offres pensées pour les entreprises
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Des solutions adaptées aux besoins et à la taille de votre
              entreprise.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* ESSENTIEL */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <h3 className="text-xl font-bold">
                ESSENTIEL
              </h3>

              <p className="mt-3 text-slate-600">
                Une solution adaptée aux petites structures.
              </p>

              <p className="mt-6 text-3xl font-bold">
                79€
                <span className="text-base font-normal text-slate-500">
                  {" "}
                  HT / poste / mois
                </span>
              </p>

            </div>

            {/* PRO */}
            <div className="rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-lg">

              <p className="mb-2 text-sm font-semibold text-blue-600">
                RECOMMANDÉ
              </p>

              <h3 className="text-xl font-bold">
                PRO
              </h3>

              <p className="mt-3 text-slate-600">
                Une protection et un accompagnement renforcés.
              </p>

              <p className="mt-6 text-3xl font-bold">
                129€
                <span className="text-base font-normal text-slate-500">
                  {" "}
                  HT / poste / mois
                </span>
              </p>

            </div>

            {/* SECURITE */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <h3 className="text-xl font-bold">
                SÉCURITÉ
              </h3>

              <p className="mt-3 text-slate-600">
                Une couche supplémentaire dédiée à la sécurité.
              </p>

              <p className="mt-6 text-3xl font-bold">
                29€
                <span className="text-base font-normal text-slate-500">
                  {" "}
                  HT / poste / mois
                </span>
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          À PROPOS
      ========================== */}
      <section
        id="apropos"
        className="bg-slate-950 py-24 text-white"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                À propos de NEXASYSTEM
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Un partenaire informatique au service de votre entreprise.
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-slate-300">
                NEXASYSTEM est une entreprise informatique spécialisée dans les
                systèmes et réseaux, la cybersécurité, la maintenance informatique,
                le cloud et le développement web. Nous accompagnons les TPE, PME,
                artisans et organisations de Belfort et du Territoire de Belfort
                dans leurs projets numériques.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Notre objectif : proposer des infrastructures fiables, sécurisées
                et adaptées aux besoins réels de chaque entreprise, avec un
                accompagnement de proximité.
              </p>

            </div>

          </div>
        </div>
      </section>

   {/* =========================
    CONTACT / DEMANDE DE DEVIS
========================== */}
<section
  id="contact"
  className="bg-slate-50 py-24"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* TITRE */}
    <div className="mx-auto max-w-3xl text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        Contact
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Parlons de votre projet
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        NEXASYSTEM accompagne les entreprises de Belfort et du Territoire de
        Belfort dans leurs projets informatiques : systèmes et réseaux,
        cybersécurité, maintenance, cloud, audit et développement numérique.
    </p>

    </div>

    {/* CONTENU */}
    <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-3">

      {/* INFORMATIONS */}
      <div className="rounded-2xl bg-slate-950 p-8 text-white">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          NEXASYSTEM
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          Un projet ?
          <br />
          Parlons-en.
        </h3>

        <p className="mt-5 leading-7 text-slate-300">
          Notre équipe vous accompagne dans vos projets informatiques,
          réseaux, cybersécurité, développement web et applications mobiles.
        </p>

        {/* TELEPHONE */}
        <div className="mt-10">

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Téléphone
          </p>

          <a
            href="tel:+33745506347"
            className="mt-2 block text-lg font-semibold text-white transition hover:text-blue-400"
          >
            07 45 50 63 47
          </a>

        </div>

        {/* EMAIL */}
        <div className="mt-6">

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            E-mail
          </p>

          <a
            href="mailto:Jessekebani@gmail.com"
            className="mt-2 block break-all text-lg font-semibold text-white transition hover:text-blue-400"
          >
            Jessekebani@gmail.com
          </a>

        </div>

        {/* SERVICES */}
        <div className="mt-10 border-t border-slate-800 pt-8">

          <p className="text-sm font-semibold text-white">
            Nous pouvons vous accompagner pour :
          </p>

          <ul className="mt-4 space-y-3 text-sm text-slate-300">

            <li>✓ Infrastructure réseau</li>
            <li>✓ Cybersécurité</li>
            <li>✓ Maintenance informatique</li>
            <li>✓ Cloud</li>
            <li>✓ Création de site web</li>
            <li>✓ Applications web & mobiles</li>

          </ul>

        </div>

      </div>

      {/* FORMULAIRE */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NOM */}
          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label
                htmlFor="nom"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Nom et prénom *
              </label>

              <input
                id="nom"
                name="nom"
                type="text"
                required
                placeholder="Votre nom et prénom"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />

            </div>

            {/* ENTREPRISE */}
            <div>

              <label
                htmlFor="entreprise"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Entreprise
              </label>

              <input
                id="entreprise"
                name="entreprise"
                type="text"
                placeholder="Nom de votre entreprise"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />

            </div>

          </div>

          {/* EMAIL + TELEPHONE */}
          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Adresse e-mail *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="exemple@entreprise.fr"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />

            </div>

            <div>

              <label
                htmlFor="telephone"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Téléphone *
              </label>

              <input
                id="telephone"
                name="telephone"
                type="tel"
                required
                placeholder="06 00 00 00 00"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />

            </div>

          </div>

          {/* TYPE DE PROJET */}
          <div>

            <label
              htmlFor="projet"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Type de projet *
            </label>

            <select
              id="projet"
              name="projet"
              required
              defaultValue=""
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            >

              <option value="" disabled>
                Sélectionnez votre besoin
              </option>

              <option value="reseau">
                Infrastructure réseau
              </option>

              <option value="cybersecurite">
                Cybersécurité
              </option>

              <option value="maintenance">
                Maintenance informatique
              </option>

              <option value="cloud">
                Cloud & solutions
              </option>

              <option value="site-web">
                Création de site web
              </option>

              <option value="ecommerce">
                Site e-commerce
              </option>

              <option value="application-web">
                Application web
              </option>

              <option value="application-mobile">
                Application mobile
              </option>

              <option value="autre">
                Autre projet
              </option>

            </select>

          </div>

          {/* BUDGET */}
          <div>

            <label
              htmlFor="budget"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Budget estimatif
            </label>

            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            >

              <option value="">
                Sélectionnez une fourchette
              </option>

              <option value="moins-500">
                Moins de 500 €
              </option>

              <option value="500-1500">
                500 € – 1 500 €
              </option>

              <option value="1500-3000">
                1 500 € – 3 000 €
              </option>

              <option value="3000-5000">
                3 000 € – 5 000 €
              </option>

              <option value="plus-5000">
                Plus de 5 000 €
              </option>

              <option value="a-definir">
                À définir ensemble
              </option>

            </select>

          </div>

          {/* MESSAGE */}
          <div>

            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Décrivez votre projet *
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Expliquez-nous votre projet, vos besoins et vos objectifs..."
              className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />

          </div>

          {/* BOUTON */}
          <div className="pt-2">

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
              {formMessage && (
          <div
            className={`mt-4 rounded-lg px-4 py-3 text-center text-sm font-medium ${
              formSuccess
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {formMessage}
          </div>
        )}
            <p className="mt-3 text-center text-xs text-slate-500">
              * Champs obligatoires
            </p>

          </div>

        </form>

      </div>

    </div>

  </div>
</section>   

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="bg-slate-950 py-8 text-slate-400">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm md:flex-row md:items-center md:justify-between lg:px-8">

          <p>
            © 2026 NEXASYSTEM. Tous droits réservés.
          </p>

          <p>
            Informatique à Belfort • Systèmes & Réseaux • Cybersécurité • Développement Web
          </p>

        </div>
      </footer>

    </main>
  );
}
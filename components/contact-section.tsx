export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-24 rounded-3xl border border-night/10 bg-white/80 p-10 shadow-sm"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-night/40">Collaborate</p>
      <h2 className="mt-3 text-3xl font-semibold text-night md:text-4xl">Let’s design clarity together.</h2>
      <p className="mt-4 max-w-2xl text-lg text-night/70">
        Tell me about the problem you’re trying to solve. I’ll respond within two business days with first steps.
      </p>
      <form
        className="mt-6 grid gap-4 md:grid-cols-2"
        name="project-inquiry"
        method="post"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="project-inquiry" />
        <label className="flex flex-col text-sm font-medium text-night/70">
          Name
          <input
            type="text"
            name="name"
            required
            className="mt-2 rounded-lg border border-night/20 bg-transparent px-4 py-3 text-base text-night outline-none transition-colors focus:border-night"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-night/70">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-2 rounded-lg border border-night/20 bg-transparent px-4 py-3 text-base text-night outline-none transition-colors focus:border-night"
          />
        </label>
        <label className="md:col-span-2 flex flex-col text-sm font-medium text-night/70">
          What challenge are you navigating?
          <textarea
            name="message"
            rows={4}
            className="mt-2 rounded-lg border border-night/20 bg-transparent px-4 py-3 text-base text-night outline-none transition-colors focus:border-night"
          ></textarea>
        </label>
        <button
          type="submit"
          className="md:col-span-2 inline-flex w-fit items-center rounded-full bg-night px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ivory transition-transform duration-200 hover:-translate-y-0.5"
        >
          Send message
        </button>
      </form>
    </section>
  );
}

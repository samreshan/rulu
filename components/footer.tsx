import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-night/10 pt-8 pb-12 text-sm text-night/60">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Samreshan Sahani. Design is direction.</p>
        <div className="flex gap-4">
          <Link href="mailto:hello@samreshan.com.np" className="hover:text-night">
            Email
          </Link>
          <Link href="https://www.linkedin.com" className="hover:text-night">
            LinkedIn
          </Link>
          <Link href="https://dribbble.com" className="hover:text-night">
            Dribbble
          </Link>
        </div>
      </div>
    </footer>
  );
}

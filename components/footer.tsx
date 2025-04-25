export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {currentYear} Khalil Manai. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
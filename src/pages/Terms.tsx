import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="text-gold font-medium uppercase tracking-[0.3em] text-xs">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-8">
            Terms of Service
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              These terms govern your use of the Stallions Sterling Law Firm
              website. By using this site you accept them.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              No legal advice
            </h2>
            <p>
              Content on this website is provided for general information only
              and does not constitute legal advice. You should not act on any
              information here without obtaining advice specific to your
              circumstances.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              No solicitor-client relationship
            </h2>
            <p>
              Sending an enquiry through this website, or reading material
              published on it, does not create a solicitor-client relationship.
              A relationship arises only after formal engagement terms have been
              agreed in writing.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              Intellectual property
            </h2>
            <p>
              All content, branding, and articles on this site belong to
              Stallions Sterling Law Firm and may not be reproduced for
              commercial use without written permission.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              Limitation of liability
            </h2>
            <p>
              We take reasonable care to keep this website accurate and
              available, but we accept no liability for loss arising from
              reliance on its content or from any interruption of access.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of the Federal Republic of
              Nigeria.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

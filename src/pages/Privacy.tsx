import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="text-gold font-medium uppercase tracking-[0.3em] text-xs">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Stallions Sterling Law Firm respects the privacy of every client,
              prospective client, and visitor to this website. This policy
              explains what information we collect and how we use it.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              Information we collect
            </h2>
            <p>
              We collect only the information you choose to give us — your name,
              email address, phone number, and the details of your enquiry when
              you complete our consultation form or contact us directly.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              How we use your information
            </h2>
            <p>
              Your information is used solely to respond to your enquiry, to
              provide legal services, and to maintain our client records. We do
              not sell, rent, or trade personal information with third parties.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              Confidentiality
            </h2>
            <p>
              Communications with the firm are treated as confidential in line
              with our professional obligations as legal practitioners. Note
              that submitting an enquiry does not by itself create a
              solicitor-client relationship.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              Your choices
            </h2>
            <p>
              You may request access to, correction of, or deletion of the
              personal information we hold about you at any time by writing to{" "}
              <a
                href="mailto:stallionslegal@gmail.com"
                className="text-gold hover:underline"
              >
                stallionslegal@gmail.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground pt-4">
              Contact
            </h2>
            <p>
              Questions about this policy may be directed to
              stallionslegal@gmail.com or +234 803 242 9497.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

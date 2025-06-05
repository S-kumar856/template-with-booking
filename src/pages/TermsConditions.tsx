
import Layout from "@/components/Layout";

const TermsConditions = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  [Placeholder text] By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-600 mb-4">
                  [Placeholder text] Permission is granted to temporarily download one copy of the materials on our website 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                <p className="text-gray-600">Under this license you may not:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or other proprietary notations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
                <p className="text-gray-600">
                  [Placeholder text] The materials on our website are provided on an 'as is' basis. We make no warranties, 
                  expressed or implied, and hereby disclaim and negate all other warranties including without limitation, 
                  implied warranties or conditions of merchantability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
                <p className="text-gray-600">
                  [Placeholder text] In no event shall our company or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                  the use or inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy Policy</h2>
                <p className="text-gray-600">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, 
                  to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
                <p className="text-gray-600">
                  [Placeholder text] These terms and conditions are governed by and construed in accordance with the laws 
                  of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Email: legal@yourbrand.com<br />
                    Phone: (555) 123-4567<br />
                    Address: 123 Business Street, City, State 12345
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;

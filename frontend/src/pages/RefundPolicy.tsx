
import Layout from "@/components/Layout";

const RefundPolicy = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund and Cancellation Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Refund Policy</h2>
                <p className="text-gray-600 mb-4">
                  [Placeholder text] We offer a 30-day money-back guarantee on all our products and services. 
                  If you are not completely satisfied with your purchase, you may request a full refund within 30 days 
                  of your original purchase date.
                </p>
                <p className="text-gray-600">
                  [Replace with your actual refund policy terms and conditions]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligible Refund Requests</h2>
                <p className="text-gray-600 mb-4">To be eligible for a refund, the following conditions must be met:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Request must be made within 30 days of purchase</li>
                  <li>Products must be in original condition (if applicable)</li>
                  <li>Proof of purchase must be provided</li>
                  <li>Service cancellation follows our cancellation terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cancellation Policy</h2>
                <p className="text-gray-600 mb-4">
                  [Placeholder text] You may cancel your appointment or service booking up to 24 hours before the scheduled time 
                  for a full refund. Cancellations made less than 24 hours in advance may be subject to a cancellation fee.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Cancellation Timeframes:</h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• 24+ hours: Full refund</li>
                    <li>• 12-24 hours: 50% refund</li>
                    <li>• Less than 12 hours: No refund</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How to Request a Refund</h2>
                <p className="text-gray-600 mb-4">To request a refund, please follow these steps:</p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Contact our customer service team</li>
                  <li>Provide your order number and reason for refund</li>
                  <li>Allow 3-5 business days for review</li>
                  <li>Refund will be processed to original payment method</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Processing Time</h2>
                <p className="text-gray-600">
                  [Placeholder text] Once your refund request is approved, please allow 5-10 business days for the refund 
                  to appear in your account. Processing times may vary depending on your payment method and financial institution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Exceptions</h2>
                <p className="text-gray-600 mb-4">The following items are not eligible for refunds:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Digital products after download</li>
                  <li>Services already completed</li>
                  <li>Custom or personalized items</li>
                  <li>Gift cards or promotional items</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  For refund requests or questions about this policy, please contact us:
                </p>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Email: refunds@yourbrand.com<br />
                    Phone: (555) 123-4567<br />
                    Hours: Monday-Friday, 9:00 AM - 5:00 PM EST
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

export default RefundPolicy;

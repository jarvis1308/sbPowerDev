import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'sbPowerDev Privacy Policy — learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <article className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-neutral mx-auto max-w-3xl dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p className="lead text-muted-foreground">
            Last updated: March 31, 2026
          </p>

          <p>
            sbPowerDev Pte. Ltd. (&ldquo;sbPowerDev,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            or engage with our services.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide when
            you contact us, fill out forms, subscribe to our newsletter, or
            engage our services. This may include:
          </p>
          <ul>
            <li>Name and job title</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Message content from contact forms</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain
            information including your IP address, browser type, operating
            system, referring URLs, pages viewed, and the dates and times of
            your visits.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To deliver the services you have requested</li>
            <li>To send you relevant updates, newsletters, and marketing communications (with your consent)</li>
            <li>To improve our website, services, and user experience</li>
            <li>To analyze usage trends and measure the effectiveness of our content</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing and Disclosure</h2>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties. We may share your information in the following
            circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers:</strong> We may share information with
              trusted third-party vendors who assist us in operating our
              website, conducting our business, or providing services to you,
              subject to confidentiality agreements.
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose information
              if required by law, regulation, or legal process.
            </li>
            <li>
              <strong>Business transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred as part of that transaction.
            </li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the Internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2>5. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience, analyze site traffic, and
            understand where our visitors come from. You can control cookie
            settings through your browser preferences.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites. We encourage you to review the privacy policies of any
            third-party sites you visit.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to
            fulfill the purposes for which it was collected, comply with legal
            obligations, resolve disputes, and enforce our agreements.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Withdraw consent at any time (where processing is based on consent)</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>

          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries
            other than your country of residence, including Singapore and India,
            where our offices are located. We ensure appropriate safeguards are
            in place to protect your information in accordance with applicable
            data protection laws.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect personal information from children. If you
            believe we have inadvertently collected such information, please
            contact us so we can promptly delete it.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or applicable laws. We will post the
            updated policy on this page with a revised &ldquo;last
            updated&rdquo; date. We encourage you to review this policy
            periodically.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> privacy@sbpowerdev.com
            </li>
            <li>
              <strong>Address:</strong> 20 Collyer Quay, #09-01,
              Singapore 049319
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

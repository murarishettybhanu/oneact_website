import React from 'react';

const securityPoints = [
  {
    title: 'End-to-End Encryption',
    description: 'All scripts encrypted in transit and at rest using industry-standard encryption',
  },
  {
    title: 'No Public Access',
    description: 'Private S3 buckets with backend-only access. Signed URLs expire in 15 minutes',
  },
  {
    title: 'NDA Enforcement',
    description: 'Mandatory NDA acceptance before viewing. Every acceptance is logged and non-reversible',
  },
  {
    title: 'Watermarking',
    description: 'Server-side dynamic watermarking prevents unauthorized sharing and enables tracking',
  },
  {
    title: 'Access Logging',
    description: 'Complete audit trail with user, IP, timestamp, and action for every interaction',
  },
  {
    title: 'Legal Admissibility',
    description: 'Timestamped submission + secure disclosure = evidence of IP ownership',
  },
];

export const Security: React.FC = () => {
  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="section-title">Bank-Grade Security</h2>
          <p className="section-subtitle">Your scripts are protected with enterprise-level security measures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityPoints.map((point, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
                <p className="text-gray-600 mt-1">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 p-8 bg-white rounded-lg border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Standards</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li>✓ IT Act 2000 Compliant</li>
            <li>✓ Intermediary Guidelines Compliant</li>
            <li>✓ SSL/TLS Encryption</li>
            <li>✓ Secure Password Hashing (bcryptjs)</li>
            <li>✓ JWT Token Authentication</li>
            <li>✓ Rate Limiting & DDoS Protection</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

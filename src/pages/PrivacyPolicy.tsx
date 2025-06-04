import { privacyPolicyHTML } from '../data/privacyPolicyContent';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div dangerouslySetInnerHTML={{ __html: privacyPolicyHTML }} />
    </div>
  );
};

export default PrivacyPolicy;
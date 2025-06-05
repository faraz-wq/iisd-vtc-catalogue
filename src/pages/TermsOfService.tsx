import { tosContent } from '../data/termsOfService';

const TermsOfService = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div dangerouslySetInnerHTML={{ __html: tosContent }} />
    </div>
  );
};

export default TermsOfService;
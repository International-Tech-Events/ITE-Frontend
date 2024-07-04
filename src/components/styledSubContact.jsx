import SubContact from './SubContact';

const StyledSubContact = ({ formImage, text7, text8 }) => {
  return (
    <div className="flex items-start mb-4">
      {formImage}
      <div className="ml-3">
        <SubContact formImage={formImage} text7={text7} text8={text8} />
      </div>
    </div>
  );
};

export default StyledSubContact;

import React, { useEffect } from 'react';

function PrivacyPage() {
  const fileUrl = 'https://fence-assets.s3.eu-central-1.amazonaws.com/t%26c_privacy/fence_t%26c_20230703.pdf'
  useEffect(() => {
    window.location.href = fileUrl;
  }, [fileUrl]);

  return null;
}

export default PrivacyPage;

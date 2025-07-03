import React from 'react';

const FetchImageToBlob = () => {
  // 이미지 파일 경로 배열 (public 폴더 기준)
  const imagePaths = [
    '/images/sample1.png',
    '/images/sample2.png',
  ];

  const handleDownload = async () => {
    const blobs = await Promise.all(
      imagePaths.map(async (path) => {
        const response = await fetch(path);
        return await response.blob();
      })
    );

    // Blob 다운로드
    blobs.forEach((blob, index) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `image_${index + 1}.${blob.type.split('/')[1]}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download All Images</button>
    </div>
  );
};

export default FetchImageToBlob;
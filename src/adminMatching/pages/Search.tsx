import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

const Search = () => {
  const navigate = useNavigate();
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/public/animations/loading.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('애니메이션 로드 실패:', error));

    const timer = setTimeout(() => {
      navigate('/center/matching/step5');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      {animationData && <Lottie animationData={animationData} className="h-32 w-32" />}

      <p className="mt-6 text-center text-lg font-semibold text-gray-900">
        어르신에게 딱 맞는 <br />
        요양보호사분을 찾고 있어요!
      </p>
    </div>
  );
};

export default Search;

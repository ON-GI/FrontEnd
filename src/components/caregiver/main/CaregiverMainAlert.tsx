import { useQuery } from '@tanstack/react-query';
import client from '../../../api/instnace';
import { useNavigate } from 'react-router-dom';

const CaregiverMainAlert = () => {
  const navigate = useNavigate();
  //  API 연결 필요
  // const {data} =  useQuery({
  //     queryKey : ['caregiver','matching','alert'],
  //     queryFn : async() => {
  //         const response = await client.get('')
  //     }
  // })

  return (
    <div
      className="bg-primary-50 mb-5 flex cursor-pointer items-center rounded-lg p-3"
      onClick={() => navigate('/caregiver/unconfirmed-matching')}
    >
      <div className="mr-3">
        <img src="src/assets/AlertIcon.png" alt="AlertIcon" />
      </div>

      <div>
        <p className="text-lg font-medium text-gray-900">
          아직 확인하지 않은 매칭이 <span className="text-primary-400 font-semibold">5건</span> 있어요!
        </p>
        <p className="text-sm text-gray-600">매칭이 오면 빠르게 알려드릴게요!</p>
      </div>
    </div>
  );
};

export default CaregiverMainAlert;
